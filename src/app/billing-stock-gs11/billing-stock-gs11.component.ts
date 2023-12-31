import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-billing-stock-gs11',
  templateUrl: './billing-stock-gs11.component.html',
  styleUrls: ['./billing-stock-gs11.component.css']
})
export class BillingStockGS11Component implements OnInit {
  billStartDate: any = new Date();
  billEndDate:any = new Date();
  particulars: any;
  productList: any = [];
  purityList: any = [];
  displayedColumns: string[] = ['date','partyname','hsncode','invno','jama', 'nama','balance'];
  openingBalance:number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  
  constructor(private service: ErpService){
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

        this.dataSource.data.forEach((element:any)=>{
          element.balance=parseInt(element.debit)-parseInt(element.credit)
        })

      }     
    });
  }
  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
