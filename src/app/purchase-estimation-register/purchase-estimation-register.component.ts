import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-purchase-estimation-register',
  templateUrl: './purchase-estimation-register.component.html',
  styleUrls: ['./purchase-estimation-register.component.css']
})
export class PurchaseEstimationRegisterComponent {
  displayedColumns: string[] = ['position','estmNo','date','gwt','nwt','grsAmnt','gst','netAmt'];

  etmnRgstrStartDate:Date=new Date();
  etmnRgstEndDate:Date=new Date();
  estmtnNo:any;
  pendng:boolean=true
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }


}
