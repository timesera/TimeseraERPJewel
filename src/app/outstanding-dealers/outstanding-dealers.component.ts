import { Component, OnInit, ViewChild } from '@angular/core';
import { ErpService } from '../erp.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-outstanding-dealers',
  templateUrl: './outstanding-dealers.component.html',
  styleUrls: ['./outstanding-dealers.component.css']
})
export class OutstandingDealersComponent implements OnInit{
  displayedColumns: string[] = ['position','partyName','mobileNO','add1','add2','balance'];

  
  partyName: any = "";
  mobileNumber: any = "";
  filterName: any = "MASTER";
  tempList: any;
  balaceAmt:number=0
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  
  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getOutstandingDealorDetails(true);
  }


  getOutstandingDealorDetails(isMaster: any){

    if(isMaster == false){
      this.filterName = "";
    }
    // console.log("this.cityName",this.cityName)
    // console.log("this.custName",this.custName)
    // console.log("this.mobileNum",this.mobileNum)

    this.service.GetOutStandingDealers(this.filterName, this.partyName, this.mobileNumber).subscribe(data => {
      if(data.length > 0){

        console.log("data",data)
        if(isMaster == true){
          this.tempList = data;
        }else {
          this.dataSource.data=data
        }
        
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   

        this.dataSource.data.forEach((element:any)=>{
          element.balance=parseInt(element.jama)-parseInt(element.nama)
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
