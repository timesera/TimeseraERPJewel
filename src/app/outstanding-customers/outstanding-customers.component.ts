import { Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-outstanding-customers',
  templateUrl: './outstanding-customers.component.html',
  styleUrls: ['./outstanding-customers.component.css']
})
export class OutstandingCustomersComponent implements OnInit {
  displayedColumns: string[] = ['position','cityName','custmrName','mobileNO','balance'];

  cityName: any = "";
  custName: any = "";
  mobileNum: any = "";
  filterName: any = "MASTER";
  tempList: any;
  balaceAmt:number=0
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getOutstandingCustomerDetails(true);
  }

  getOutstandingCustomerDetails(isMaster: any){

    if(isMaster == false){
      this.filterName = "";
    }
    console.log("this.cityName",this.cityName)
    console.log("this.custName",this.custName)
    console.log("this.mobileNum",this.mobileNum)

    this.service.GetOutStandingCustomer(this.filterName, this.cityName, this.custName, this.mobileNum).subscribe(data => {
      if(data.length > 0){
        if(isMaster == true){
          this.tempList = data;
        }else {
          this.dataSource.data=data
        }
        
        // this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   

        this.dataSource.data.forEach((element:any)=>{
          element.balance=parseInt(element.debit)-parseInt(element.credit)
        this.balaceAmt+=element.balance
        })
        console.log("this.dataSource.data",this.dataSource.data)

      }     
    });

    
  }
  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
