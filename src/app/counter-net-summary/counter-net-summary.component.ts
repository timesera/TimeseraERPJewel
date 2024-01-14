import { Component, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-counter-net-summary',
  templateUrl: './counter-net-summary.component.html',
  styleUrls: ['./counter-net-summary.component.css']
})
export class CounterNetSummaryComponent {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  exportDataSource(){
    TableUtil.exportArrayToExcel(this.dataSource,"counternetsummaryReport");
  }
  displayedColumns: string[] = ['position','cuntName','pcs','gwt','nwt'];
  name: any = "MNAME";
  prodList:any=[];
  prodName:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  gwt:number=0
  nwt:number=0
  dataSource = new MatTableDataSource<any>();
pcs: string | number | undefined;
pieces: string | number | undefined;
  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getProductData();
  }
  getProductData(){
    
    this.service.GetProductService(this.name).subscribe(data => {

      console.log("Product Summary Data",data)
      if(data.length > 0){

        this.prodList=data;
      }     
    });

    
   }
   getCounterNetData(){
    if(this.prodName != null && this.prodName != undefined && this.prodName != ""){
    this.service.GetCounterNetData(this.prodName).subscribe(data => {
      if(data.length > 0){
        
          this.dataSource.data=data
        }
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.data.forEach((element: any) => {
          
          this.gwt += element.gwt
          this.nwt +=element.nwt
        })
    });
  }else {
    this.service.showError("Please fill the required fields","");
  }
    
   }
   getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

}
