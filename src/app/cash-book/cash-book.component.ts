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
  billEndDate:any;
  displayedColumns: string[] = ['position','date','type','particular','voucherNo','debit','credit','balance'];

  
  // partyName: any = "";
  // mobileNumber: any = "";
  tempList: any;
  balaceAmt:number=0
  // tempList: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  
  constructor(private service: ErpService){
  }
  ngOnInit() {
  }



  getCashBookDetails(){

    console.log("billStartDate",this.billStartDate)
    console.log("billEndDate",this.billEndDate)
    const datePipe = new DatePipe('en-US');
     let billStartingDate= datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
     let billEndingDate= datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';


     console.log("billStartingDate",billStartingDate)
     console.log("billEndingDate",billEndingDate)
    // console.log("this.cityName",this.cityName)
    // console.log("this.custName",this.custName)
    // console.log("this.mobileNum",this.mobileNum)
    forkJoin(this.service.GetCashBookData(billStartingDate, ""),this.service.GetCashBookData(billStartingDate, billEndingDate)).subscribe(data => {
      if(billEndingDate==undefined){
        this.tempList=data
        console.log
      } else {
        this.dataSource.data=data;
      }
    });

    // this.service.GetCashBookData(billStartingDate, billEndingDate).subscribe(data => {
    //   if(data.length > 0){

    //     this.dataSource.data=data 
    //     this.dataSource.paginator = this.paginator;   

    //     this.dataSource.data.forEach((element:any)=>{
    //       element.balance=parseInt(element.debit)-parseInt(element.credit)
    //     this.balaceAmt+=element.balance
    //     })
    //     console.log("this.dataSource.data",this.dataSource.data)

    //   }     
    // });
  }
  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

}
