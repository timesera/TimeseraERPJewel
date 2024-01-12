import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { TableUtil } from '../tableUtil';


@Component({
  selector: 'app-sale-register',
  templateUrl: './sale-register.component.html',
  styleUrls: ['./sale-register.component.css']
})
export class SaleRegisterComponent implements OnInit{
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['position','billDate','jewelType','billNo','custName','pcs','gwt','nwt','totalAmt','discount','grsAmt','cgst','sgst','igst','netAmount'];

  saleStartDate:Date=new Date();
  saleEndDate:Date=new Date();
  jewelList:any=[];
  jewelType:any = "";
  custList:any=[];
  cstName:any = "";
  billNo:any;
  mobileNo:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getSaleRegisterData("JEWELTYPE");
    this.getSaleRegisterData("CUSTNAME");
  }
  getSaleRegisterData(name: any = ""){

    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.saleStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.saleEndDate, 'yyyy/MM/dd') || '';
   
    // const datePipe = new DatePipe('en-US');
    // let billStartingDate = datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
    // let billEndingDate = datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';
    this.service.GetSaleRegistersData(name, saleStartingDate, saleEndingDate, this.cstName,this.jewelType).subscribe(data => {
      if(data.length > 0){
        if(name == "JEWELTYPE"){
          this.jewelList = data;
        }
        else if(name == "CUSTNAME"){
          this.custList = data;
        }
        else {
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;   
  
          this.dataSource.data.forEach((element:any)=>{
            // element.balance=parseInt(element.debit)-parseInt(element.credit)
            element.grsAmt=element.totAmt-element.disAmt
          })
        }
      }     
    });
  }

  exportDataSource(){
    TableUtil.exportArrayToExcel(this.dataSource,"saleRegisterReport");
  }
  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
