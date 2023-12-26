import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErpService {

  private URLHostName = "http://www.service.timeseraerp.in";
    getOutStandingCustomerURL: string = this.URLHostName + "/api/Erp/GetOutStandingCustomer";
    getOutStandingDealorURL: string = this.URLHostName + "/api/Erp/GetOutStandingDealers";

    headers: any;
    constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    }

    GetOutStandingCustomer(filterName: any, cityName: any, custName: any, mobileNum: any):  Observable<any>{
        this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
        const params = new HttpParams().set('filterName', filterName).set('cityName', cityName).set('custName', custName).set('mobileNum', mobileNum);
        return this.httpClient.get<any>(this.getOutStandingCustomerURL, { 'params': params, 'headers': this.headers });
    }
    GetOutStandingDealers(filterName: any, partyName: any, mobileNumber: any):  Observable<any>{
      this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
      const params = new HttpParams().set('filterName', filterName).set('partyName', partyName).set('mobileNumber', mobileNumber);
      return this.httpClient.get<any>(this.getOutStandingDealorURL, { 'params': params, 'headers': this.headers });
  }
}
