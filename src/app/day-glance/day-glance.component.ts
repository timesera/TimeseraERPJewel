import { Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-day-glance',
  templateUrl: './day-glance.component.html',
  styleUrls: ['./day-glance.component.css']
})
export class DayGlanceComponent {

  getDayGlanceDetails() {
    let startDate = this.datePipe.transform(this.startDate, 'yyyy/MM/dd') || '';
    let endDate = this.datePipe.transform(this.endDate, 'yyyy/MM/dd') || '';
    this.service.GetDayGlanceDetails(startDate, endDate).subscribe(data => {
      this.dayGlanceList = data;
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
    let count = this.dayGlanceList.filter((re: any) => re.transtype == name).length;
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
    let oggwt = 0;
    let ognwt = 0;
    let ogamt = 0;
    var tempList = this.dayGlanceList.filter((re: any) => re.transtype == title)
    tempList.forEach((item: any) => {
      if(columnName == "GWT"){
        total += Number(item.gwt);
      }
      else if(columnName == "NWT"){
        total += Number(item.nwt);
      }
      else if(columnName == "TOTAMT"){
        total += Number(item.totamt);
      }
      else if(columnName == "CGST"){
        total += Number(item.cgst);
      }
      else if(columnName == "SGST"){
        total += Number(item.sgst);
      }
      else if(columnName == "IGST"){
        total += Number(item.igst);
      }
      else if(columnName == "NETAMT"){
        total += Number(item.netamt);
      }
      else if(columnName == "ODG"){
        oggwt += Number(item.oggwt);
        ognwt += Number(item.ognwt);
        ogamt += Number(item.ogamt);
      }
      else if(columnName == "ODS"){
        oggwt += Number(item.oggwt);
        ognwt += Number(item.ognwt);
        ogamt += Number(item.ogamt);
      }
      else if(columnName == "ORDADV"){
        total += Number(item.ordadv);
      }
      else if(columnName == "CHE"){
        total += Number(item.cheque);
      }
      else if(columnName == "CARD"){
        total += Number(item.card);
      }
      else if(columnName == "CASH"){
        total += Number(item.cash);
      }
      else if(columnName == "SCH"){
        total += Number(item.scheme);
      }
      else if(columnName == "BAL"){
        total += Number(item.balance);
      }
      else if(columnName == "ONL"){
        total += Number(item.online);
      }
    });
  
    return (columnName !="ODS" && columnName !="ODG") ? total : (oggwt +"|"+ ognwt +"|"+ ogamt);
  }

  exportExcelDataSource() {
    TableUtil.exportTableToExcel("day-glance-table","Day Glance Report");
  }

  exportPDFDataSource() {

  }
}
