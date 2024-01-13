import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-billing-stock-gs11',
  templateUrl: './billing-stock-gs11.component.html',
  styleUrls: ['./billing-stock-gs11.component.css']
})
export class BillingStockGS11Component implements OnInit {
nama: any;
jama: any;
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  billStartDate: any = new Date();
  billEndDate:any = new Date();
  particulars: any;
  productList: any = [];
  purityList: any = [];
  displayedColumns: string[] = ['date','partyname','hsncode','invno','jama', 'nama','balance'];
  openingBalance:number = 0;
  grossWt1:number=0
  balance: number = 0;

  grossWt2:number=0
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  
  constructor(private service: ErpService,private datePipe: DatePipe){
  }
  
  ngOnInit() {
    this.getBuillonStockDetails("PARTICULARS");
    
  }
  getBuillonStockDetails(name: any = ""){
     const datePipe = new DatePipe('en-US');
     let billStartingDate= datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
     let billEndingDate= datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';

     forkJoin(this.service.GetBullionStock(name, billStartingDate, billEndingDate, this.particulars),this.service.GetBullionStock("", billStartingDate, "", this.particulars)).subscribe(data => {
      if(name == "PARTICULARS"){
        this.productList = data[0];
      }
      else {
        this.openingBalance = data[1].nama - data[1].jama;
        this.dataSource.data=data[0] 
        this.dataSource.paginator = this.paginator;   

        this.dataSource.data.forEach((element: any) => {
          element.bilStockDate = this.datePipe.transform(element.entrydate, 'dd-MM-yyyy');
          element.balance = parseInt(element.debit) - parseInt(element.credit);
          this.grossWt1 += element.jama;
          this.grossWt2 += element.nama;
          this.balance += element.jama - element.nama;
        });
        

      }     
    });
  }
  
  exportDataSource(){
    TableUtil.exportArrayToExcel(this.dataSource,"billingstockReport");
  }
  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
