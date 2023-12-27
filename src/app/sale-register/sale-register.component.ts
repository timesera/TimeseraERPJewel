import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';


@Component({
  selector: 'app-sale-register',
  templateUrl: './sale-register.component.html',
  styleUrls: ['./sale-register.component.css']
})
export class SaleRegisterComponent implements OnInit{
  displayedColumns: string[] = ['position','billDate','jewelType','billNo','custName','pcs','gwt','nwt','totalAmt','discount','grsAmt','cgst','sgst','igst','netAmount'];

  saleStartDate:Date=new Date();
  saleEndDate:Date=new Date();
  jewelList:any=[];
  jewelType:any;
  custList:any=[];
  cstName:any;
  billNo:any;
  mobileNo:any;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    // this.getSaleRegisterData();
  }

  // getSaleRegisterData(){

  //   if(isMaster == false){
  //     this.filterName = "";
  //   }
  //   console.log("this.cityName",this.cityName)
  //   console.log("this.custName",this.custName)
  //   console.log("this.mobileNum",this.mobileNum)

  //   this.service.GetSaleRegistersData(this.name, this.billStartDate, this.billEndDate, this.custName,this.jewelType).subscribe(data => {
  //     if(data.length > 0){
  //       if(isMaster == true){
  //         this.tempList = data;
  //       }else {
  //         this.dataSource.data=data
  //       }
        
  //       // this.dataSource.data=data 
  //       this.dataSource.paginator = this.paginator;   

  //       this.dataSource.data.forEach((element:any)=>{
  //         element.balance=parseInt(element.debit)-parseInt(element.credit)
  //       this.balaceAmt+=element.balance
  //       })
  //       console.log("this.dataSource.data",this.dataSource.data)

  //     }     
  //   });

    
  // }

  // getSerialNumber(index: number): number {
  
  //   return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  // }
}
