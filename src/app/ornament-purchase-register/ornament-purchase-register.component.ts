import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

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
}
