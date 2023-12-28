import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-purity-summary',
  templateUrl: './purity-summary.component.html',
  styleUrls: ['./purity-summary.component.css']
})
export class PuritySummaryComponent {
  displayedColumns: string[] = ['position','prefix','pcs','gwt','nwt'];
  name: any = "MNAME";
  prodList:any=[];
  prodName:any;
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
    });

    
   }
   getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
