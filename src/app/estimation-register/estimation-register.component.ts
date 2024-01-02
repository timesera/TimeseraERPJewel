import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

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
  getEstimationData(){
    if(this.pendng==true){
      this.getPendingEstimation()
    }else {
      this.getTotalEstimation()
    }
  }
  getPendingEstimation(){

    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.estmtnStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.estmtnStartDate, 'yyyy/MM/dd') || '';
   
    
    this.service.GetPendingEstimation(saleStartingDate, saleEndingDate).subscribe(data => {
      console.log("getPendingEstimation",data)
      if(data.length > 0){
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;           
      }     
    });
  }
  getTotalEstimation(){

    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.estmtnStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.estmtnStartDate, 'yyyy/MM/dd') || '';
   
    
    this.service.GetTotalEstimation(saleStartingDate, saleEndingDate).subscribe(data => {
      console.log("GetTotalEstimation",data)
      if(data.length > 0){
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;           
      }     
    });
  }
  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
