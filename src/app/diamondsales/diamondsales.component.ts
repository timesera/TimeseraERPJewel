import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-diamondsales',
  templateUrl: './diamondsales.component.html',
  styleUrls: ['./diamondsales.component.css']
})
export class DiamondsalesComponent {
  displayedColumns: string[] = ['position','billNo','billDt','tagNo','prodName','pcs','gwt','nwt','diaCts','diaAmt'];

  dmdSaleStrtDt:Date=new Date();
  dmdSaleEndDt:Date=new Date();
  billNo:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
}
