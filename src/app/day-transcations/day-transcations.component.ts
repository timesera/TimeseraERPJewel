import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-day-transcations',
  templateUrl: './day-transcations.component.html',
  styleUrls: ['./day-transcations.component.css']
})
export class DayTranscationsComponent implements OnInit{
  startDate:Date=new Date();
  totalCash:number = 0;
  constructor(private service: ErpService,private datePipe: DatePipe){
  }
  ngOnInit() {

  }

  getDayTranscationDetails(){
    this.service.GetDayTranscations('2023/12/20').subscribe(data => {
      
    });

  }

  exportDataSource(){

  }
}
