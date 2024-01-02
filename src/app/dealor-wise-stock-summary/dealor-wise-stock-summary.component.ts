import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-dealor-wise-stock-summary',
  templateUrl: './dealor-wise-stock-summary.component.html',
  styleUrls: ['./dealor-wise-stock-summary.component.css']
})
export class DealorWiseStockSummaryComponent {
  displayedColumns: string[] = ['position','dealrName','pcs','gwt','nwt'];
  name: any = "MNAME";
  prodList:any=[];
  prodName:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  constructor(private service: ErpService){
  }
  ngOnInit() {
    // this.getProductData();
  }
}
