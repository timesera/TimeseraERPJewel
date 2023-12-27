import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cash-book',
  templateUrl: './cash-book.component.html',
  styleUrls: ['./cash-book.component.css']
})
export class CashBookComponent {
  billStartDate: any;
  billEndDate: any;

  displayedColumns: string[] = ['position', 'date', 'type', 'particular', 'voucherNo', 'debit', 'credit', 'balance'];
  tempList: any;
  balaceAmt: number = 0
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService) {
  }
  ngOnInit() {
  }
  getCashBookDetails() {

    console.log("billStartDate", this.billStartDate)
    console.log("billEndDate", this.billEndDate)
    const datePipe = new DatePipe('en-US');
    let billStartingDate = datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
    let billEndingDate = datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';

    forkJoin(this.service.GetCashBookData(billStartingDate, ""), this.service.GetCashBookData(billStartingDate, billEndingDate)).subscribe(data => {
      this.tempList = data
      this.dataSource.data = data;
    });
    this.dataSource.data.forEach((element) => {
      element.balanceperAmount = parseInt(element.debit) - parseInt(element.credit)
      console.log("element.balanceperAmount", element.balanceperAmount)
      this.balaceAmt += element.balanceperAmount
    })

  }
  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

}
