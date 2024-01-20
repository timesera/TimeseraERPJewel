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
export class DayTranscationsComponent implements OnInit {
  startDate: Date = new Date();
  totalCashReceipt: number = 0;
  totalCashPayment: number = 0;
  cashinHand: number = 0;
  dayOpening: number = 0;
  mainHeader: any = "";
  tableTotalHeader: number = 1;
  tableTotalHeaderName: any = "";
  dayTranscationList: any = Array<any>();
  constructor(private service: ErpService, private datePipe: DatePipe) {
  }
  ngOnInit() {
    this.getDayTranscationDetails();
  }

  getDayTranscationDetails() {
    let saleStartingDate = this.datePipe.transform(this.startDate, 'yyyy/MM/dd') || '';
    this.service.GetDayTranscations(saleStartingDate).subscribe(data => {
      if(data.dayOpening != undefined){
        this.dayOpening = Number(data.dayOpening.sumCredit) - Number(data.dayOpening.sumDebit);
      }
      this.dayTranscationList = data.dayTransactionsList;
      this.totalCashReceipt = this.dayTranscationList.reduce((a: any, b: { crediT_RECEIPT: any; }) => a + b.crediT_RECEIPT, 0);
      this.totalCashPayment = this.dayTranscationList.reduce((a: any, b: { debiT_PAYMENT: any; }) => a + b.debiT_PAYMENT, 0);
      this.cashinHand = ((this.dayOpening + this.totalCashReceipt) - this.totalCashPayment);
    });

  }
  validateMainHeader(name: any){
    if(this.mainHeader != name){
      this.mainHeader = name;
      return true;
    }
    return false;
  }
  showTotal(name: any){
    let count = this.dayTranscationList.filter((re: any) => re.mainhead == name).length;
    if(count == this.tableTotalHeader && this.tableTotalHeaderName != name){
      this.tableTotalHeader = 1;
      this.tableTotalHeaderName = name;
      return true;
    }
    this.tableTotalHeader += 1;
    return false;
  }
  getTotal(title: any, columnName: any){
    let total = 0;
    var tempList = this.dayTranscationList.filter((re: any) => re.mainhead == title)
    tempList.forEach((item: any) => {
      if(columnName == "MIGWT"){
        total += Number(item.isS_GWT);
      }
      else if(columnName == "MINWT"){
        total += Number(item.isS_NWT);
      }
      else if(columnName == "MRGWT"){
        total += Number(item.reC_GWT);
      }
      else if(columnName == "MRNWT"){
        total += Number(item.reC_NWT);
      }
      else if(columnName == "CGWT"){
        total += Number(item.crediT_RECEIPT);
      }
      else if(columnName == "CNWT"){
        total += Number(item.debiT_PAYMENT);
      }
    });
  
    return total;
  }

  exportExcelDataSource() {

  }

  exportPDFDataSource() {

  }
}
