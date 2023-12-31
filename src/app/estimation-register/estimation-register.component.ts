import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-estimation-register',
  templateUrl: './estimation-register.component.html',
  styleUrls: ['./estimation-register.component.css']
})
export class EstimationRegisterComponent {
  displayedColumns: string[] = ['position','estmNo','date','cstmrName','gwt','nwt','itmAmnt','totlAmount','gst','discount','netAmt'];

  estmtnStartDate:Date=new Date();
  estmtnEndDate:Date=new Date();
  estmtnNo:any;
  pendng:boolean=true
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }

}
