import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-purchase-return-register',
  templateUrl: './purchase-return-register.component.html',
  styleUrls: ['./purchase-return-register.component.css']
})
export class PurchaseReturnRegisterComponent implements OnInit{
  displayedColumns: string[] = ['position','voucherNO','date','mainPrdt','prtyName','gwt','less','nwt','totalAmt','cgst','sgst','igst','grsAmt'];

  prchseStartDate:Date=new Date();
  prchseEndDate:Date=new Date();
  prtyList:any=[];
  partyName:any;
  prodList:any=[];
  prodName:any;
  purtyList:any=[];
  purtyName:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getPurchaseReturnData("PARTYNAME");
    this.getPurchaseReturnData("PTYPE");
    this.getPurchaseReturnData("PREFIX");
    // this.getOrnamentData("PARTYNAME");
    // this.getOrnamentData("PARTYNAME");
  }
  getPurchaseReturnData(columnName: any =""){
    if(columnName){
      this.partyName=" ";
      this.prodName=" ";
      this.purtyName=" ";
    }
    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.prchseStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.prchseEndDate, 'yyyy/MM/dd') || '';
    this.service.GetPurchaseReturnRegister(columnName,saleStartingDate,saleEndingDate,this.partyName,this.prodName,this.purtyName).subscribe(data => {
      if(data.length > 0){
      if(columnName == "PARTYNAME"){
        this.prtyList = data;
      }if(columnName == "PTYPE"){
        this.prodList = data;
      }if(columnName == "PREFIX"){
        this.purtyList = data;
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
