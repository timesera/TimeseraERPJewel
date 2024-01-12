import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-old-gold-silver-book',
  templateUrl: './old-gold-silver-book.component.html',
  styleUrls: ['./old-gold-silver-book.component.css']
})
export class OldGoldSilverBookComponent implements AfterViewInit {
  openingBalance: any;
  productList: any;
  particulars: any;
  billStartDate: any;
  billEndDate: any;
  displayedColumns: string[] = ['sno', 'date', 'particular', 'HSNCode', 'Invno', 'Column1', 'Column2', 'Column3', 'Column4', 'Column5'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    // Load your data into dataSource
    this.loadData();
  }

  // Sample Method to load data
  loadData() {
    const data = [
      { sno: 1, date: '2022-01-01', Particular: 'Sample', hsncode: '1234', invno: 'INV001', column1: '12.0', column2: '13.00', column3: '14.00', column4: '15.00', column5: '16.00' },
      { sno: 2, date: '2022-01-01', Particular: 'Sample', hsncode: '1234', invno: 'INV001', column1: '12.0', column2: '13.00', column3: '14.00', column4: '15.00', column5: '16.00' },
      { sno: 3, date: '2022-01-01', Particular: 'Sample', hsncode: '1234', invno: 'INV001', column1: '12.0', column2: '13.00', column3: '14.00', column4: '15.00', column5: '16.00' },
      { sno: 4, date: '2022-01-01', Particular: 'Sample', hsncode: '1234', invno: 'INV001', column1: '12.0', column2: '13.00', column3: '14.00', column4: '15.00', column5: '16.00' },
      { sno: 5, date: '2022-01-01', Particular: 'Sample', hsncode: '1234', invno: 'INV001', column1: '12.0', column2: '13.00', column3: '14.00', column4: '15.00', column5: '16.00' },
      { sno: 6, date: '2022-01-01', Particular: 'Sample', hsncode: '1234', invno: 'INV001', column1: '12.0', column2: '13.00', column3: '14.00', column4: '15.00', column5: '16.00' },
      // Add more data
    ];

    this.dataSource.data = data;
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

  getBuillonStockDetails() {
    // Implement your logic to get stock details based on the selected filters
    // Example: Replace this with your actual logic
    this.loadBuillonStockDetails();
  }

  loadBuillonStockDetails() {
    // Implement your logic to load data based on the date range and particulars
    // Example: Replace this with your actual data fetching logic
    const filteredData = this.dataSource.data.filter(element => {
      const elementDate = new Date(element.date);
      return (!this.billStartDate || elementDate >= this.billStartDate) &&
             (!this.billEndDate || elementDate <= this.billEndDate) &&
             (!this.particulars || element.Particular === this.particulars);
    });

    this.dataSource.data = filteredData;
  }
}
