import { Component, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-counter-net-summary',
  templateUrl: './counter-net-summary.component.html',
  styleUrls: ['./counter-net-summary.component.css']
})
export class CounterNetSummaryComponent {
  displayedColumns: string[] = ['position','cuntName','pcs','gwt','nwt'];
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

      console.log("Product Summary Data",data)
      if(data.length > 0){

        this.prodList=data;
      }     
    });

    
   }
   getCounterNetData(){
    
    this.service.GetCounterNetData(this.prodName).subscribe(data => {
      if(data.length > 0){
        
          this.dataSource.data=data
        }
        
        this.dataSource.paginator = this.paginator;
    });

    
   }
   getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

}
