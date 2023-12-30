import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-stone-purchase-register',
  templateUrl: './stone-purchase-register.component.html',
  styleUrls: ['./stone-purchase-register.component.css']
})
export class StonePurchaseRegisterComponent {
  displayedColumns: string[] = ['position','voucherNO','date','mainPrdt','prtyName','gwt','less','nwt','totalAmt','cgst','sgst','igst','grsAmt'];

  stnPrcsStrtDt:Date=new Date();
  stnPrcsEndDt:Date=new Date();
  prodList:any=[];
  prodName:any;
  prtyList:any=[];
  prtyName:any;
  invNO:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
