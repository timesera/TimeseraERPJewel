import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-purchase-return-register',
  templateUrl: './purchase-return-register.component.html',
  styleUrls: ['./purchase-return-register.component.css']
})
export class PurchaseReturnRegisterComponent implements OnInit{
  displayedColumns: string[] = ['position','voucherNO','date','prtyName','gwt','less','nwt','totalAmt','cgst','sgst','igst','grsAmt'];
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
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

  gwt:number=0
  less:number=0
  nwt:number=0
  totalAmt:number=0
  cgst:number=0
  sgst:number=0
  igst:number=0
  grsAmt:number=0
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService,private datePipe: DatePipe){
  }
  ngOnInit() {
    this.getPurchaseReturnData("PARTYNAME");
    this.getPurchaseReturnData("PTYPE");
    this.getPurchaseReturnData("PREFIX");
    // this.getOrnamentData("PARTYNAME");
    // this.getOrnamentData("PARTYNAME");
  }
  getPurchaseReturnData(columnName: any =""){
    console.log("columnName",columnName)
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
      }else if(columnName==""){
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   
        this.dataSource.data.forEach((element:any)=>{
          element.invtDate = this.datePipe.transform(element.invDate, 'dd-MM-yyyy');
          element.less=parseInt(element.gwt)-parseInt(element.nwt)
          this.gwt += element.gwt
            this.less +=element.less
            this.nwt += element.nwt
            this.totalAmt += element.value
            this.cgst += element.cgstamt
            this.sgst += element.sgstamt
            this.igst += element.igstamt
            this.grsAmt += element.totValue
        })
      }  
    }
    });    
   }
   exportDataSource(){
    TableUtil.exportArrayToExcel(this.dataSource,"purchasereturnReport");
  }
   getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
