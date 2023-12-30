import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-repair-delivery-register',
  templateUrl: './repair-delivery-register.component.html',
  styleUrls: ['./repair-delivery-register.component.css']
})
export class RepairDeliveryRegisterComponent {
  displayedColumns: string[] = ['position','reprNo','date','delNo','delDate','custmrName','mobileNo','grsWt','addWt','actlWt','totalAmt','lessAmt','netAmt'];

  rprDelStartDate:Date=new Date();
  rprDelEndDate:Date=new Date();
  custList:any=[];
  cstName:any;
  reprNo:any;
  delvryNo:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
