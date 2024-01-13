import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { forkJoin } from 'rxjs';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-product-wise-sale-summary',
  templateUrl: './product-wise-sale-summary.component.html',
  styleUrls: ['./product-wise-sale-summary.component.css']
})
export class ProductWiseSaleSummaryComponent implements OnInit {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  billStartDate: any = new Date();
  billEndDate: any = new Date();
  jewelType: any = "";
  jewelTypeList: any = [];
  productName: any = "";
  productNameList: any = [];
  counter: any = "";
  counterList: any = [];
  prefix: any = "";
  prefixList: any = [];
  customerName: any = "";
  customerNameList: any = [];
  billNO: any;
  tagNo: any;
  empCode: any;
  
  displayedColumns: string[] = ['billdate', 'jeweltype', 'billno', 'tagno', 'mainproduct', 'productname', 'prefix', 'pcs', 'gwt', 'less', 'nwt',  'diacts',  'amount', 'stoneamount', 'totamount',  'huid', 'hsncode'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService,private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.GetJewelAndCustNameDetails("JEWELTYPE");
    this.GetJewelAndCustNameDetails("CUSTNAME");
    this.GetProduceWiseSalesDetails("PRODUCTNAME");
    this.GetProduceWiseSalesDetails("COUNTERNAME");
    this.GetProduceWiseSalesDetails("PREFIX");
  }

  GetProduceWiseSalesDetails(name: any = ""){
    const datePipe = new DatePipe('en-US');
    let billStartingDate = datePipe.transform(this.billStartDate, 'yyyy/MM/dd') || '';
    let billEndingDate = datePipe.transform(this.billEndDate, 'yyyy/MM/dd') || '';
    this.service.GetProductWiseSaleRegister(name, billStartingDate, billEndingDate, this.jewelType,
    this.productName, this.counter, this.prefix).subscribe(data => {
      if(data.length > 0){
        if(name == "PRODUCTNAME"){
          this.productNameList = data;
        }
        else if(name == "COUNTERNAME"){
          this.counterList = data;
        }
        else if(name == "PREFIX"){
          this.prefixList = data;
        }
        else {
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;   
  
          this.dataSource.data.forEach((element:any)=>{
            element.productDate = this.datePipe.transform(element.billDate, 'dd-MM-yyyy');
            element.balance=parseInt(element.debit)-parseInt(element.credit)
          })
        }
      }     
    });
  }
  exportDataSource(){
    TableUtil.exportArrayToExcel(this.dataSource,"productwiseReport");
  }
  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

  GetJewelAndCustNameDetails(name: any = ""){
    this.service.GetSaleRegistersData(name, "", "", "","").subscribe(data => {
      if(data.length > 0){
        if(name == "JEWELTYPE"){
          this.jewelTypeList = data;
        }
        else if(name == "CUSTNAME"){
          this.customerNameList = data;
        }
      }     
    });
  }

}
