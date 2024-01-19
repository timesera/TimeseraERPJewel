// stock-balance.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-stock-balance',
  templateUrl: './stock-balance.component.html',
  styleUrls: ['./stock-balance.component.css'],
})
export class StockBalanceComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private erpService: ErpService) { }

  ngOnInit() {
    this.getStockBalance();
  }
  // getSerialNumber(_t13: any) {
  //   throw new Error('Method not implemented.');
  // }
  displayedColumns: string[] = ['position', 'prefix', 'pcs', 'gwt', 'nwt'];
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }

  getStockBalance() {
    this.erpService.GetStockBalance().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }


}
