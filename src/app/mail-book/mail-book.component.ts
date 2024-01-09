import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-mail-book',
  templateUrl: './mail-book.component.html',
  styleUrls: ['./mail-book.component.css']
})
export class MailBookComponent implements OnInit{
  displayedColumns: string[] = ['position','category','city','name','adrs','state','distrct','moblNo1','moblNo2','email','dob','anvrsry'];

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
  ngOnInit() {
    this.GetCategoryDetails("MASTER");
  }
  GetCategoryDetails(columnName: any =""){
    console.log("columnName",columnName)
    this.service.GetMainBookRegister(columnName,"","").subscribe(data => {
      console.log("tagDetails",data)
      if(data.length >0 ){
        if(columnName == "MASTER"){
          this.ctgrList = data;
        }else {
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;   
        
        }
      }
    })
  }
  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
  updateSelectedMonth() {
    // Additional logic to extract and handle the selected month here
    console.log('Selected Month:', this.selectedDate);
  }


}
