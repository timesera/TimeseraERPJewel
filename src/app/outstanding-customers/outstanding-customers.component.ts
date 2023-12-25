import { Component, OnInit } from '@angular/core';
import { TimeseraerpserviceService } from '../timesersutilities/timeseraerpservice.service'

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
  constructor(private timeseraservice: TimeseraerpserviceService){

  }
  ngOnInit() {
    this.getOutstandingCustomerDetails();
  }

  getOutstandingCustomerDetails(){
    this.timeseraservice.GetOutStandingCustomer(this.cityName, this.custName, this.mobileNum).subscribe(data => {
      if(data.length > 0){
        this.tempList = data;
      }
    });
  }
}
