import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tag-details',
  templateUrl: './tag-details.component.html',
  styleUrls: ['./tag-details.component.css']
})
export class TagDetailsComponent implements OnInit {
  mName: any = "";
  mNameList: any = [];
  productName: any = "";
  productNameList: any = [];
  productCategory: any = "";
  productCategoryList: any = [];
  dealerName: any = "";
  delearNameList: any = [];
  prefix: any = "";
  prefixList: any = [];
  counterName: any = "";
  counterNameList = [];
  categoryName: any = "";
  categoryNameList: any = [];

  displayedColumns: string[] = ['vno', 'date', 'transtype', 'paymode', 'particulars', 'partyname', 'debit', 'credit', 'closebalance'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService) {
  }

  ngOnInit() {
    this.GetTagDetails("MNAME"); 
    this.GetTagDetails("PRODUCTNAME");
    this.GetTagDetails("PRODUCTCATEGORY");
    this.GetTagDetails("DEALERNAME");
    this.GetTagDetails("PREFIX");
    this.GetTagDetails("COUNTERNAME");
    this.GetTagDetails("CATEGORYNAME");
  }

  GetTagDetails(columnName: any =""){
    this.service.GetTagGenerationDetails(columnName).subscribe(data => {
      if(data.length >0 ){
        if(columnName == "MNAME"){
          this.mNameList = data;
        }
        else if(columnName == "PRODUCTNAME"){
          this.productNameList = data;
        }
        else if(columnName == "PRODUCTCATEGORY"){
          this.productCategoryList = data;
        }
        else if(columnName == "DEALERNAME"){
          this.delearNameList = data;
        }
        else if(columnName == "PREFIX"){
          this.prefixList = data;
        }
        else if(columnName == "COUNTERNAME"){
          this.counterNameList = data;
        }
        else if(columnName == "CATEGORYNAME"){
          this.categoryNameList = data;
        }
        else {
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;   
  
          this.dataSource.data.forEach((element:any)=>{
            element.balance=parseInt(element.debit)-parseInt(element.credit)
          })
        }
      }
    })
  }
}
