import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-melting-register',
  templateUrl: './melting-register.component.html',
  styleUrls: ['./melting-register.component.css']
})
export class MeltingRegisterComponent implements OnInit{
  displayedColumns: string[] = ['position','entryNo','date','jewelType','mltngWt','touch','weight','oldTuch','oldFine','profit','loss'];

  mltngRgstrStartDate:Date=new Date();
  mltngRgstrEndDate:Date=new Date();
  jewelList:any=[];
  jewelType:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  melWgt:number=0
  weight:number=0
  oldFine:number=0
  profit:number=0
  loss:number=0

  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService,private datePipe: DatePipe){
  }
  ngOnInit() {
    // this.getSaleRegisterData("JEWELTYPE");
    this.getMeltingRegisterData("JEWELTYPE");
  }
  getMeltingRegisterData(name: any = ""){

    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.mltngRgstrStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.mltngRgstrEndDate, 'yyyy/MM/dd') || '';
   if(name){
    this.jewelType=" ";  
   }
    
    this.service.GetMeltingBookRegister(name, saleStartingDate, saleEndingDate, this.jewelType).subscribe(data => {
      console.log("JewelTypesData",data)
      if(data.length > 0){
        if(name == "JEWELTYPE"){
          this.jewelList = data;
        }
        
        else {
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;   
  
          this.dataSource.data.forEach((element:any)=>{
            element.meltingDate = this.datePipe.transform(element.vDate, 'dd-MM-yyyy');
            this.weight += element.pureGold
            this.melWgt +=element.meltingWt
            this.oldFine += element.ofinegold
            this.profit += element.profit
            this.loss += element.loss
          })
        }
      }     
    });
  }
  exportDataSource(){
    TableUtil.exportArrayToExcel(this.dataSource,"meltingregisterReport");
  }
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
