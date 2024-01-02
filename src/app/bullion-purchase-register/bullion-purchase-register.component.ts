import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bullion-purchase-register',
  templateUrl: './bullion-purchase-register.component.html',
  styleUrls: ['./bullion-purchase-register.component.css']
})
export class BullionPurchaseRegisterComponent implements OnInit{
  displayedColumns: string[] = ['position','invNO','invDt','mainPrdt','prtyName','weight','grsAmt','cgst','sgst','igst','totalAmt','tcs','netAmt'];

  bulPrhsStartDate:Date=new Date();
  bulPrhsEndDate:Date=new Date();
  prtyList:any=[];
  partyName:any;
  prodList:any=[];
  prodName:any;
  invoice:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getBullionPurchaseData("DEALER");
    this.getBullionPurchaseData("PTYPE");
  }
  getBullionPurchaseData(columnName: any =""){
    console.log("columnName",columnName)
    if(columnName){
      console.log("Manasa")
      this.partyName=" ";
      this.prodName=" ";
    }
    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.bulPrhsStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.bulPrhsEndDate, 'yyyy/MM/dd') || '';
    this.service.GetBullionPurchaseRegister(columnName,saleStartingDate,saleEndingDate,this.partyName,this.prodName).subscribe(data => {
      if(data.length > 0){
      if(columnName == "DEALER"){
        this.prtyList = data;
      }if(columnName == "PTYPE"){
        this.prodList = data;
      }else {
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   
      
      }  
    }
    });

    
   }
   getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
