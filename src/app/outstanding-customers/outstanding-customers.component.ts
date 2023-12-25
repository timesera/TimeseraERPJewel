import { Component, OnInit } from '@angular/core';
import { ErpService } from '../erp.service';

@Component({
  selector: 'app-outstanding-customers',
  templateUrl: './outstanding-customers.component.html',
  styleUrls: ['./outstanding-customers.component.css']
})
export class OutstandingCustomersComponent implements OnInit {

  cityName: any = null;
  custName: any = null;
  mobileNum: any = null;
  tempList: any;
  constructor(private service: ErpService){
  }
  ngOnInit() {
    this.getOutstandingCustomerDetails();
  }

  getOutstandingCustomerDetails(){
    this.service.GetOutStandingCustomer(this.cityName, this.custName, this.mobileNum).subscribe(data => {
      if(data.length > 0){
        this.tempList = data;
      }
    });
  }
}
