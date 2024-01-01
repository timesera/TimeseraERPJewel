import { Component, ViewChild, AfterContentInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position','cntrName','pcs','gwt','nwt','amount'];

  cntrWiseSaleStrtDt:Date=new Date();
  cntrWiseSaleEndDt:Date=new Date();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}