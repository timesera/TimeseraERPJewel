import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customerreceiptregister',
  templateUrl: './customerreceiptregister.component.html',
  styleUrls: ['./customerreceiptregister.component.css']
})
export class CustomerreceiptregisterComponent implements OnInit {
  billStartDate: any = new Date();
  billEndDate: any = new Date();
  customerName: any = "";
  customerNameList: any = [];
  displayedColumns: string[] = ['recno', 'recdate', 'customername'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService,private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.GetCustomerReceiptRegisterDetails(true);
  }
  GetCustomerReceiptRegisterDetails(isMaster: boolean = false){
    const datePipe = new DatePipe('en-US');
    let billStartingDate = datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
    let billEndingDate = datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';
    if(isMaster == true){
      billStartingDate = "";
      billEndingDate = "";
    }    

    this.service.GetReceiptRegister(billStartingDate, billEndingDate, this.customerName).subscribe(data => {
      if (data.length > 0) {
        if (billStartingDate == "" && billEndingDate == "" && this.customerName == "") {
          this.customerNameList = data;
        }
        else {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;

          this.dataSource.data.forEach((element: any) => {
            element.cstmrRecptDate = this.datePipe.transform(element.recDate, 'dd-MM-yyyy');
            element.balance = parseInt(element.debit) - parseInt(element.credit)
          });
        }
      }     
    });
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
