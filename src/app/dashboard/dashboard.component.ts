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
  displayedColumns: string[] = ['position','billDate','jewelType','billNo','custName','pcs','gwt','nwt','totalAmt','discount','grsAmt','cgst','sgst','igst','netAmount'];

  todayDate:Date=new Date();
  currentYear:string = new Date().getFullYear().toString();
  userDetails: any = [];
  dailyRates: any = [];
  anniversaryWishBox: any = [];
  birthdayWishBox: any = [];
  genBillNo: any;
  totalBillsCount: any;
  todayDuesandCount: any = [];
  totalDuesandCount: any = [];
  hederFlagName: string = "";

  wishboxtab: boolean = true;
  duestab: boolean = false;
  ratesTab: boolean = true;
  rateChangeTab: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    const datePipe = new DatePipe('en-US');
    let todayDate = datePipe.transform(this.todayDate, 'yyyy/MM/dd') || '';
    this.getSaleRegisterData();
    forkJoin(
      this.service.GetDailyRates(todayDate), this.service.GetGenBillNo(this.currentYear), this.service.GetFirmConfigure(),
      this.service.GetTotalBills(this.currentYear), this.service.GetAnniversaryWishBoxDetails(todayDate),
      this.service.GetBirthDayWishBoxDetails(todayDate), this.service.GetTodayDues(todayDate), this.service.GetTotalDues()
    ).subscribe(data => {
      this.dailyRates = data[0];
      this.genBillNo = data[1];
      if(data[2].length > 0){
        this.userDetails = data[2][0];
      }
      this.totalBillsCount = data[3];   
      this.anniversaryWishBox = data[4];
      this.birthdayWishBox = data[5];
      this.todayDuesandCount = data[6];
      this.totalDuesandCount = data[7];
    });
  }

  showhiderateheader(name: any){
    if(this.hederFlagName != name){
      this.hederFlagName = name;
      return true;
    }
    return false;   
  }

  tabHeaderChange(name: any){
    if(name == "WISH") { this.wishboxtab = true; this.duestab = false;}
    else if(name == "DUES") {this.wishboxtab = false; this.duestab = true;}
    else if(name == "GOLD") {this.ratesTab = true; this.rateChangeTab = false;}
    else if(name == "EDIT") {this.ratesTab = false; this.rateChangeTab = true;}
  }

  displayDueBoxDetails(filterName: any){
    var list = filterName == "TD" ? this.todayDuesandCount.customerLedgers : this.totalDuesandCount.customerLedgers;
    if(list.length>0){
      this.service.openModal("DUE",list);
    }
    else {
      this.service.showWarning("No records found!","")
    }
  }

  displayWishBoxDetails(filterName: any){
    var list = filterName == "A" ? this.anniversaryWishBox.dealerMasters : this.birthdayWishBox.dealerMasters;
    if(list.length>0){
      this.service.openModal("WISH",list)
    }
    else {
      this.service.showWarning("No records found!","")
    }
  }

  getSaleRegisterData(name: any = ""){

    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(new Date(), 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(new Date(), 'yyyy/MM/dd') || '';
   
    this.service.GetSaleRegistersData(name, saleStartingDate, saleEndingDate, "","").subscribe(data => {
      if(data.length > 0){
        this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;
      }     
    });
  }

  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}