import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-repair-recevials-register',
  templateUrl: './repair-recevials-register.component.html',
  styleUrls: ['./repair-recevials-register.component.css']
})
export class RepairRecevialsRegisterComponent {
  displayedColumns: string[] = ['position','reprNo','date','custName','mobileNo','grsWt','itmAmount','cash','card','online'];

  rprRclStartDate:Date=new Date();
  rprRclEndDate:Date=new Date();
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
