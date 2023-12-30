import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-re-order-stock',
  templateUrl: './re-order-stock.component.html',
  styleUrls: ['./re-order-stock.component.css']
})
export class ReOrderStockComponent {
  displayedColumns: string[] = ['position','prodCatgry','prodName','minQty','pcs','balPcs','excesPcs'];

  
  prodList:any=[];
  prodName:any;
  catList:any=[];
  catName:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
