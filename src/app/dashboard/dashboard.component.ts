import { Component, ViewChild, AfterContentInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { forkJoin } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position','cntrName','pcs','gwt','nwt','amount'];

  todayDate:Date=new Date();
  currentYear:string = new Date().getFullYear().toString();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    let todayDate = datePipe.transform(this.todayDate, 'yyyy/MM/dd') || '';
    forkJoin(
      this.service.GetDailyRates(todayDate), this.service.GetGenBillNo(this.currentYear), this.service.GetFirmConfigure(),
      this.service.GetTotalBills(this.currentYear), this.service.GetAnniversaryWishBoxDetails(todayDate),
      this.service.GetBirthDayWishBoxDetails(todayDate), this.service.GetTodayDues(todayDate),
      this.service.GetMonthDues(todayDate), this.service.GetTotalDues()
    ).subscribe(data => {
      
    });
  }
}