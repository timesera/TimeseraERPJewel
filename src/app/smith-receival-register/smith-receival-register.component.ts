import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-smith-receival-register',
  templateUrl: './smith-receival-register.component.html',
  styleUrls: ['./smith-receival-register.component.css']
})
export class SmithReceivalRegisterComponent {
  displayedColumns: string[] = ['position','recNo','recDt','smthName','totalWt'];

  smthRcvlStrtDt:Date=new Date();
  smthRcvlEndDt:Date=new Date();
  smthList:any=[];
  smthName:any;
  recptNo:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
