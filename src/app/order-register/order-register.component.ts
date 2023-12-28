import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent {
  displayed1Columns: string[] = ['position1','ordrNo','ordrDate','cstName','mblNo1','mblNo2','totPcs','totWt','totAmt','inchage','invNo','invDate','jwlType'];
  displayed2Columns: string[] = ['position2','ordrNo','ordrDate','cstName','prodName','pcs','weight','desc1','desc2','incharge'];

  orderStartDate:Date=new Date();
  orderEndDate:Date=new Date();
  jewelList:any=[];
  cstmrType:any;
  cstmrList:any=[];
  orderNo:any;
  incharge:any;
  inchrgList:any=[];
  pendng:boolean=false;
  prodType:any;
  prodList:any=[]

  jewelName: any = "JEWELTYPE";
  custName: any = "CUSTNAME";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();



  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

}
