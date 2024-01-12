import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { TableUtil } from '../tableUtil';

@Component({
  selector: 'app-purity-summary',
  templateUrl: './purity-summary.component.html',
  styleUrls: ['./purity-summary.component.css']
})
export class PuritySummaryComponent {
  calculateTotal(column: string): number {
    return this.dataSource.data.reduce((total, element) => total + (element[column] || 0), 0);
  }

  getTotal(_t12: any): string | number {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['position','prefix','pcs','gwt','nwt'];
  name: any = "MNAME";
  prodList:any=[];
  prodName:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  gwt:number=0
  nwt:number=0
  
  dataSource = new MatTableDataSource<any>();
  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getProductData();
  }
  getProductData(){
    
    this.service.GetProductService(this.name).subscribe(data => {

      
      if(data.length > 0){

        this.prodList=data;
      }     
    });

    
   }
   getPuritySummaryDetails(){
    
    this.service.GetPuritySummaryData(this.prodName).subscribe(data => {
      if(data.length > 0){
        console.log("Purity Summary Data",data)
          this.dataSource.data=data
        }
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.data.forEach((element: any) => {
          
          this.gwt += element.gwt
          this.nwt +=element.nwt
        })
    });

    
   }
   exportDataSource(){
    TableUtil.exportArrayToExcel(this.dataSource,"puritysummaryReport");
  }
   getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
