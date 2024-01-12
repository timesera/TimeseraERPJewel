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
  displayedColumns: string[] = ['position','estmNo','date','cstmrName','gwt','nwt','itmAmnt','totlAmount','gst','netAmt'];

  estmtnStartDate:Date=new Date();
  estmtnEndDate:Date=new Date();
  estmtnNo:any;
  grossWt:number=0
  netWt:number=0
  totalAmt:number=0
  gstAmt:number=0
  netAmt:number=0
  pendng:boolean=false
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  constructor(private service: ErpService,private datePipe: DatePipe){
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
    let saleEndingDate = datePipe.transform(this.estmtnEndDate, 'yyyy/MM/dd') || '';
   
    
    this.service.GetPendingEstimation(saleStartingDate, saleEndingDate).subscribe(data => {
      console.log("getPendingEstimation",data)
      if(data.length > 0){
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator; 
          
          this.dataSource.data.forEach((element:any)=>{
            element.estmtDate = this.datePipe.transform(element.estDate, 'dd-MM-yyyy');
            this.grossWt += element.gwt
            this.netWt +=element.nwt
            this.totalAmt += element.totAmount
            this.gstAmt += element.vatAmt
            this.netAmt += element.netAmt
          })
      }     
    });
  }
  getTotalEstimation(){

    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.estmtnStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.estmtnEndDate, 'yyyy/MM/dd') || '';
   
    
    this.service.GetTotalEstimation(saleStartingDate, saleEndingDate).subscribe(data => {
      console.log("GetTotalEstimation",data)
      if(data.length > 0){
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;  
          
          this.dataSource.data.forEach((element:any)=>{
            element.estmtDate = this.datePipe.transform(element.estDate, 'dd-MM-yyyy');
            this.grossWt += element.gwt
            this.netWt += element.nwt
            this.totalAmt += element.totAmount
            this.gstAmt += element.vatAmt
            this.netAmt += element.netAmt
          })
      }     
    });
  }
  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
