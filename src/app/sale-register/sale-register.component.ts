import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';


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
  jewelName: any = "JEWELTYPE";
  custName: any = "CUSTNAME";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService){
  }
  ngOnInit() {
    // this.getSaleRegisterData();
    this.getCustomerList();
    this.getJweleryList()
  }

  getJweleryList(){

    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.saleStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.saleEndDate, 'yyyy/MM/dd') || '';
    

    this.service.GetSaleRegistersData(this.jewelName, saleStartingDate, saleEndingDate, this.cstName,this.jewelType).subscribe(data => {
      if(data.length > 0){

        console.log("JewelaryData",data)
        this.jewelList=data;
        
        
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   

        this.dataSource.data.forEach((element:any)=>{
        //   element.balance=parseInt(element.debit)-parseInt(element.credit)
        // this.balaceAmt+=element.balance
        })
        console.log("this.dataSource.data",this.dataSource.data)

      }     
    });

    
  }
  getCustomerList(){
    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.saleStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.saleEndDate, 'yyyy/MM/dd') || '';
    
    this.service.GetSaleRegistersData(this.custName, saleStartingDate, saleEndingDate, this.cstName,this.jewelType).subscribe(data => {
      if(data.length > 0){

        console.log("customerData",data)
        this.custList=data;
        
        
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   

        this.dataSource.data.forEach((element:any)=>{
        //   element.balance=parseInt(element.debit)-parseInt(element.credit)
        // this.balaceAmt+=element.balance
        })
        console.log("this.dataSource.data",this.dataSource.data)

      }     
    });
  }
  getSaleRegisterData(){
    
    const datePipe = new DatePipe('en-US');
    let saleStartingDate = datePipe.transform(this.saleStartDate, 'yyyy/MM/dd') || '';
    let saleEndingDate = datePipe.transform(this.saleEndDate, 'yyyy/MM/dd') || '';
    this.custName=" "

    this.service.GetSaleRegistersData(this.custName, saleStartingDate, saleEndingDate, this.cstName,this.jewelType).subscribe(data => {
      if(data.length > 0){

        console.log("tableData",data)
        this.jewelList=data;
              
        this.dataSource.data=data 
        this.dataSource.paginator = this.paginator;   

        this.dataSource.data.forEach((element:any)=>{
          element.grsAmt=element.totAmt-element.disAmt
        // this.balaceAmt+=element.balance
        })
        console.log("this.dataSource.data",this.dataSource.data)

      }     
    });


  }

  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }
}
