import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ErpService } from '../erp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent implements OnInit{
  displayed1Columns: string[] = ['position1','ordrNo','ordrDate','cstName','mblNo1','mblNo2','totPcs','totWt','totAmt','inchage','invNo','invDate','jwlType'];
  displayed2Columns: string[] = ['position2','ordrNo','ordrDate','cstName','prodName','pcs','weight','desc1','desc2','incharge'];

  orderStartDate:Date=new Date();
  orderEndDate:Date=new Date();
  jewelList:any=[];
  cstmrType:any;
  cstmrList:any=[];
  orderNo:any;
  incharge:any;
  inchrgList:any=[];
  pendng:boolean=false;
  prodType:any;
  prodList:any=[]

  jewelName: any = "JEWELTYPE";
  custName: any = "CUSTNAME";
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>();

  constructor(private service: ErpService) {
  }

  ngOnInit() {
    
    this.GetProduceWiseSalesDetails("PRODUCTNAME");
    this.GetProductCustomerData()
    
  }
  GetProduceWiseSalesDetails(name: any = ""){
    console.log("prodName",name)
    const datePipe = new DatePipe('en-US');
    let billStartingDate = datePipe.transform(this.orderStartDate, 'yyyy/MM/dd') || '';
    let billEndingDate = datePipe.transform(this.orderEndDate, 'yyyy/MM/dd') || '';
    this.service.GetProductWiseSaleRegister(name, billStartingDate, billEndingDate,"","","","").subscribe(data => {
      if(data.length > 0){
        if(name == "PRODUCTNAME"){
          this.prodList = data;
        }
        
        else {
          this.dataSource.data=data 
          this.dataSource.paginator = this.paginator;   
  
          this.dataSource.data.forEach((element:any)=>{
            element.balance=parseInt(element.debit)-parseInt(element.credit)
          })
        }
      }     
    });
  }
  GetProductCustomerData(){
    // console.log("prodName",name)
    const datePipe = new DatePipe('en-US');
    let billStartingDate = datePipe.transform(this.orderStartDate, 'yyyy/MM/dd') || '';
    let billEndingDate = datePipe.transform(this.orderEndDate, 'yyyy/MM/dd') || '';
    this.service.GetOrderRegisterData("", "","").subscribe(data => {
      console.log("Customer Daata",data)     
    });
  }

  getSerialNumber(index: number): number {
  
    return index + 1 + this.paginator.pageIndex * this.paginator.pageSize;
  }

}
