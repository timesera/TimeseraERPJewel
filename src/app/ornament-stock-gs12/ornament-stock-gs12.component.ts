import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-ornament-stock-gs12',
  templateUrl: './ornament-stock-gs12.component.html',
  styleUrls: ['./ornament-stock-gs12.component.css']
})
export class OrnamentStockGS12Component implements OnInit {
  billStartDate: any = new Date();
  billEndDate: any = new Date();
  particulars: any = "";
  prefix: any = "";
  productList: any = [];
  purityList: any = [];
  displayedColumns: string[] = ['date', 'partyname', 'hsncode', 'invno', 'jama', 'nama', 'balance', 'purity'];
  openingBalance: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService, private datePipe: DatePipe) {
  }
  ngOnInit() {
    this.getOrnamentsStockDetails("PARTICULARS");
    this.getOrnamentsStockDetails("PREFIX");
  }
  getOrnamentsStockDetails(name: any = "") {
    if (this.particulars != null && this.particulars != undefined && this.particulars != "") {
      const datePipe = new DatePipe('en-US');
      let billStartingDate = datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
      let billEndingDate = datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';
      if (this.prefix == undefined) { this.prefix = ""; }
      forkJoin(this.service.GetOrnmentStock(name, billStartingDate.toString(), billEndingDate.toString(), this.particulars.toString(), this.prefix.toString()), this.service.GetOrnmentStock("", billStartingDate, "", this.particulars, this.prefix)).subscribe(data => {
        if (name == "PARTICULARS") {
          this.productList = data[0];
        }
        else if (name == "PREFIX") {
          this.purityList = data[0];
        }
        else {
          this.openingBalance = data[1].nama - data[1].jama;
          this.dataSource.data = data[0]
          this.dataSource.paginator = this.paginator;

          this.dataSource.data.forEach((element: any) => {
            element.balance = parseInt(element.debit) - parseInt(element.credit);
            element.entrdate = this.datePipe.transform(element.entrydate, 'dd-MM-yyyy');
          })
        }
      });
    }
    else{
      //this.service.showError("Please fill the required fields");
    }
  }
  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
