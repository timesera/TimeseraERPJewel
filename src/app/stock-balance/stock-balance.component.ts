import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stock-balance',
  templateUrl: './stock-balance.component.html',
  styleUrls: ['./stock-balance.component.css'],
})
export class StockBalanceComponent implements AfterViewInit {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }

  displayedColumns: string[] = ['position', 'prefix', 'pcs', 'gwt', 'nwt'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Your other component properties and methods

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    // Load your data into dataSource
    this.loadData();
  }

  // Method to load your data into dataSource
  loadData() {
    // Your data retrieval logic goes here
    // Example: Replace this with your actual data fetching logic
    const data = [
      { position: 1, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 2, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 3, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 4, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 5, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 6, prefix: 'ABC', pcs: 80, gwt: 20.123, nwt: 15.789 },
      { position: 7, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 8, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 9, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      { position: 10, prefix: 'ABC', pcs: 10, gwt: 20.123, nwt: 15.789 },
      // ... more data
    ];

    this.dataSource.data = data;
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
