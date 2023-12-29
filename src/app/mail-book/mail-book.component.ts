import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-mail-book',
  templateUrl: './mail-book.component.html',
  styleUrls: ['./mail-book.component.css']
})
export class MailBookComponent {
  displayedColumns: string[] = ['position','category','city','name','cardNo','adrs','state','distrct','moblNo1','moblNo2','edctn','email','fax','wbst','dob','anvrsry'];

  mailStartDate:Date=new Date();
  mailEndDate:Date=new Date();
  dobDate:Date=new Date();
  anvrsryDate:Date=new Date()
  ctgrList:any=[];
  ctgryType:any;
  cityList:any=[];
  cityType:any;

  distList:any=[];
  distName:any;
  stateList:any=[];
  statName:any;

  PhoneNo:any;
  serchName:any;
  selectedDate!: Date;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  updateSelectedMonth() {
    // Additional logic to extract and handle the selected month here
    console.log('Selected Month:', this.selectedDate);
  }


}
