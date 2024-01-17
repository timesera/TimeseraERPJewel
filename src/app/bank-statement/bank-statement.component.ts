import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.css']
})
export class BankStatementComponent implements OnInit {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }
  
  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  billStartDate: any = new Date();
  billEndDate: any = new Date();
  accountNo: number = 0;
  accountList: any = [];
  payMode: any = "";
  transtype: any;
  currBal: any;
  amt: any;
  payModeList: any = [];
  displayedColumns: string[] = ['vno', 'date', 'transtype', 'paymode', 'particulars', 'partyname', 'debit', 'credit', 'closebalance'];
  openingBalance: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService) {
  }

  ngOnInit(): void {
    this.GetBankTransactionsDetails("ACCNO");
    this.GetBankTransactionsDetails("MODE");

  }

  GetBankTransactionsDetails(name: any = "") {
    const datePipe = new DatePipe('en-US');
    let billStartingDate = datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
    let billEndingDate = datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';
    this.getBankTransactionsOpeningDetails();
    this.service.GetBankTransactions(name, billStartingDate, billEndingDate, this.accountNo, this.transtype, this.payMode).subscribe(data => {
      if(name == "ACCNO"){
        this.accountList = data;
      }
      else if(name == "MODE"){
        this.payModeList = data;
      }
      else {
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   

        this.dataSource.data.forEach((element:any)=>{
          element.balance=parseInt(element.debit)-parseInt(element.credit)
        })

      }     
    });
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
  getBankTransactionsOpeningDetails(){
    const datePipe = new DatePipe('en-US');
    let billStartingDate = datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
    this.service.GetBankTransactionsOpening(billStartingDate, this.accountNo, this.payMode).subscribe(data => {
      if(data != null){
        this.openingBalance = data.credit - data.debit;
      }
    });
  }
  getAmtType(){
    this.getBankTransactionsOpeningDetails();
    this.service.GetBankTransactions("ACCNO", "", "", this.accountNo, "", "").subscribe(data => {
      if(data.type != null && data.type != undefined){
        this.transtype = data.type;
        this.currBal = data.currbal;
        this.amt = data.amt;
      }
    });
  }
}
