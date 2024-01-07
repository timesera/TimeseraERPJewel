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
  wishBoxDisplayedColumns: string[] = [];
  dueBoxDisplayedColumns: string[] = [];
  gridList: any = []
  isWishBox: boolean = false;
  isDueBox: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.gridList = data.list;
    if(data.tabName=="WISH") {
      this.isWishBox = true;
      this.isDueBox = false;
    }
    else if(data.tabName=="DUE") {
      this.isWishBox = false;
      this.isDueBox = true;
    }
  }
}
