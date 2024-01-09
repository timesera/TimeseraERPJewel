import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ornament-purchase-register',
  templateUrl: './ornament-purchase-register.component.html',
  styleUrls: ['./ornament-purchase-register.component.css']
})
export class OrnamentPurchaseRegisterComponent {
  displayedColumns: string[] = ['position','invNo','invDate','mainProd','prtyName','gwt','less','nwt','totalAmt','cgst','sgst','igst','grsAmt','tcs','netAmt'];

  ornmtRgstrStartDate:Date=new Date();
  ornmtRgstrEndDate:Date=new Date();
  // jewelList:any=[];
  estimation:any;
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
    this.getOrnamentData("PARTYNAME");
    this.getOrnamentData("PTYPE");
    this.getOrnamentData("PREFIX");
  }
  getOrnamentData(columnName: any =""){
    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.ornmtRgstrStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.ornmtRgstrEndDate, 'yyyy/MM/dd') || '';
    this.service.GetOrnmentPurchaseRegister(columnName,saleStartingDate,saleEndingDate,this.partyName,this.prodName,this.purtyName).subscribe(data => {
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
        
        this.dataSource.data.forEach((element:any)=>{
          element.less=parseInt(element.gwt)-parseInt(element.nwt)
        })
      }  
    }
    });    
   }
   getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
