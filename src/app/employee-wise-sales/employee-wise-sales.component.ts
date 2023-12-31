import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-employee-wise-sales',
  templateUrl: './employee-wise-sales.component.html',
  styleUrls: ['./employee-wise-sales.component.css']
})
export class EmployeeWiseSalesComponent {
  displayedColumns: string[] = ['position','empCode','pcs','gwt','nwt','amount','cmsn'];

  empWiseSaleStrtDt:Date=new Date();
  empWiseSaleEndDt:Date=new Date();
  empCode:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
