import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-dealor-wise-stock-summary',
  templateUrl: './dealor-wise-stock-summary.component.html',
  styleUrls: ['./dealor-wise-stock-summary.component.css']
})
export class DealorWiseStockSummaryComponent implements OnInit {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['position', 'dealrName', 'pcs', 'gwt', 'nwt'];
  name: any = "MNAME";
  prodList: any[] = [];
  prodName: any;
  gwt: number = 0;
  nwt: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  pieces: string | number | undefined;

  constructor(private service: ErpService) {}

  ngOnInit() {
    this.getProductData("MNAME");
  }

  getProductData(columnName: any = "") {
    console.log("columnName", columnName);
    this.gwt = 0; // Reset gwt
    this.nwt = 0; // Reset nwt

    this.service.GetDealorWiseSumryRegister(columnName, this.prodName).subscribe(data => {
      console.log("tagDetails", data);
      if (data.length > 0) {
        if (columnName == "MNAME") {
          this.prodList = data;
        } else {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;

          this.dataSource.data.forEach((element: any) => {
            this.gwt += element.gwt;
            this.nwt += element.nwt;
          });
        }
      }
    });
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
