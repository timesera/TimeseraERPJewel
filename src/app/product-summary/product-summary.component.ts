import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['position', 'category', 'pcs', 'gwt', 'nwt'];
  prodName: any;
  prodList: any[] = [];
  pieces: number = 0;
  gwt: number = 0;
  nwt: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService) {}

  ngOnInit() {
    this.getProductData();
  }

  getProductData() {
    this.service.GetProductService("MNAME").subscribe(data => {
      console.log("Product Summary Data", data);
      if (data.length > 0) {
        this.prodList = data;
      }
    });
  }

  getProductSummaryData() {
    this.gwt = 0;
    this.nwt = 0;
    this.pieces = 0;

    this.service.GetProductData(this.prodName).subscribe(data => {
      if (data.length > 0) {
        console.log("Purity Summary Data", data);
        this.dataSource.data = data;
      }

      this.dataSource.paginator = this.paginator;

      this.dataSource.data.forEach((element: any) => {
        this.gwt += element.gwt;
        this.nwt += element.nwt;
        this.pieces += element.pcs || 0;
      });
    });
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
