import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-customer-leader',
  templateUrl: './customer-leader.component.html',
  styleUrls: ['./customer-leader.component.css']
})
export class CustomerLeaderComponent {
  displayedColumns: string[] = ['position','date','billNo','particular','debit','credit','balance','days'];

  cstmtStartDate:Date=new Date();
  cstmrEndDate:Date=new Date();
  custList:any=[];
  custName:any;
  cityName:any;
  phoneNo:any;
  address:any;
  mobileNo:any;
  gstIn:any;
  panNo1:any;
  panNo2:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
