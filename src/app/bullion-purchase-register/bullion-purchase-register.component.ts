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

  weight:number=0
  grsAmt:number=0
  cgst:number=0
  sgst:number=0
  igst:number=0
  totalAmt:number=0
  tcs:number=0
  netAmt:number=0
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService,private datePipe: DatePipe){
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
      }else if(columnName == ""){
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   
      
        this.dataSource.data.forEach((element:any)=>{
          element.bullionDate = this.datePipe.transform(element.entrydate, 'dd-MM-yyyy');
          this.weight += element.totQty
          this.grsAmt +=element.totAmount
          this.cgst += element.cgst
          this.sgst += element.sgst
          this.igst += element.igst
          this.totalAmt += element.finalamount
          this.tcs += element.tcsamt
          this.netAmt += element.netAmount
        })
      }  
    }
    });

    
   }
   getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
