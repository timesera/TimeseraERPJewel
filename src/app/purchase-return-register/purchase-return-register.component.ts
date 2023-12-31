import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-purchase-return-register',
  templateUrl: './purchase-return-register.component.html',
  styleUrls: ['./purchase-return-register.component.css']
})
export class PurchaseReturnRegisterComponent {
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
}
