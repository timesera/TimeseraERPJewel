import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit{
  displayedColumns: string[] = ['position','category','pcs','gwt','nwt'];
  tempList: any;
  prodName:any;
  balaceAmt:number=0
  name: any = "MNAME";
  prodList:any=[];
  gwt:number=0
  nwt:number=0
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

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
   getProductSummaryData(){
    
    this.service.GetProductData(this.prodName).subscribe(data => {
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
   getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
