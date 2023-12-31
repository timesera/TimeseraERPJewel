import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-counter-wise-sales',
  templateUrl: './counter-wise-sales.component.html',
  styleUrls: ['./counter-wise-sales.component.css']
})
export class CounterWiseSalesComponent {
  displayedColumns: string[] = ['position','cntrName','pcs','gwt','nwt','amount'];

  cntrWiseSaleStrtDt:Date=new Date();
  cntrWiseSaleEndDt:Date=new Date();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
