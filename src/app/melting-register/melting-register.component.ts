import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-melting-register',
  templateUrl: './melting-register.component.html',
  styleUrls: ['./melting-register.component.css']
})
export class MeltingRegisterComponent {
  displayedColumns: string[] = ['position','entryNo','date','jewelType','mltngWt','touch','weight','purGld','oldTuch','oldFine','profit','loss'];

  mltngRgstrStartDate:Date=new Date();
  mltngRgstrEndDate:Date=new Date();
  jewelList:any=[];
  jewelType:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
