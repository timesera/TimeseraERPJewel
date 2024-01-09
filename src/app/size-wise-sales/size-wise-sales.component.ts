import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-size-wise-sales',
  templateUrl: './size-wise-sales.component.html',
  styleUrls: ['./size-wise-sales.component.css']
})
export class SizeWiseSalesComponent {
  sizWisSaltartDate: any = new Date();
  sizWisSalEndDate: any = new Date();
  prodList: any = [];
  prodName: any = "";
  catList: any = [];
  catName: any = "";
  prodNameList: any = [];
  prodNameId: any = "";
  cuntrList: any = [];
  cuntrName: any = "";
  tagList: any = [];
  tagName: any;
  
  displayedColumns: string[] = ['position', 'prodCat', 'prodName', 'prodSize', 'pcs', 'gwt', 'nwt'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService) {
  }

}
