import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-old-gold-silver-book',
  templateUrl: './old-gold-silver-book.component.html',
  styleUrls: ['./old-gold-silver-book.component.css']
})
export class OldGoldSilverBookComponent  {
  openingBalance: any;
  oldStartDate: Date = new Date();
  oldEndDate: Date = new Date();
  mainType: any = "";
  mainlist:any = "";
  displayedColumns: string[] = ['sno', 'date', 'particular', 'HSNCode', 'Invno', 'Column1', 'Column2', 'Column3', 'Column4', 'Column5'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  constructor(private service: ErpService, private datePipe: DatePipe) { }
  ngOnInit() {
    this.GetOldGoldBookMainType();
  }
  GetOldGoldBookMainType(){
    this.service.GetOldGoldBookMainType().subscribe(data => {
      this.mainlist = data;

    });
  }
  getOldGoldBookDetails() {
    const datePipe = new DatePipe('en-US');
    let oldStartDate = datePipe.transform(this.oldStartDate, 'yyyy/MM/dd') || '';
    let oldEndDate = datePipe.transform(this.oldEndDate, 'yyyy/MM/dd') || '';
    
    this.service.GetOldGoldBookDetails(oldStartDate, oldEndDate, this.mainType).subscribe(data => {
      this.dataSource.data = data;

      this.dataSource.paginator = this.paginator;

    });
  }

  getSerialNumber(index: number): number {
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
  particulars(name: any, oldStartDate: string, oldEndDate: string, particulars: any): any {
  }
}
