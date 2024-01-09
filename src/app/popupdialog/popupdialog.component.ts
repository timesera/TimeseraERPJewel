import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-popupdialog',
  templateUrl: './popupdialog.component.html',
  styleUrls: ['./popupdialog.component.css']
})
export class PopupdialogComponent {
  wishBoxDisplayedColumns: string[] = ['custtype', 'dealername', 'address', 'cityname', 'mobilenum',];
  dueBoxDisplayedColumns: string[] = ['billno', 'jeweltype', 'billdate', 'city', 'custname', 'mobilenum', 'billamt', 'paidamt', 'balanceamt', 'incharger',] ;
  isWishBox: boolean = false;
  isDueBox: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = data.list;
    if(data.title=="WISH") {
      this.isWishBox = true;
      this.isDueBox = false;
    }
    else if(data.title=="DUE") {
      this.isWishBox = false;
      this.isDueBox = true;
    }
  }
}
