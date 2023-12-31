import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-smith-issue-register',
  templateUrl: './smith-issue-register.component.html',
  styleUrls: ['./smith-issue-register.component.css']
})
export class SmithIssueRegisterComponent {
  displayedColumns: string[] = ['position','isuNo','isuDt','smthName','goldWt','copper','stones','totNwt','recNo','recWt','balWt'];

  smtIsuStrtDt:Date=new Date();
  smtIsuEndDt:Date=new Date();
  smthList:any=[];
  smthName:any;
  // prtyList:any=[];
  // prtyName:any;
  issueNo:any;
  pendngs:boolean=false;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
