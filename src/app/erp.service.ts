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
  getCashBookURL: string = this.URLHostName + "/api/Erp/GetCashBook";
  getOrnmentStockURL: string = this.URLHostName + "/api/Erp/GetOrnmentStock";
  getBullionStockURL: string = this.URLHostName + "/api/Erp/GetBullionStock";
  getSaleRegisterURL: string = this.URLHostName + "/api/Erp/GetSaleRegister";
  getBankTransactionsURL: string = this.URLHostName + "/api/Erp/GetBankTransactions";
  getBankTransactionsOpeningURL: string = this.URLHostName + "/api/Erp/GetBankTransactionsOpening";
  getProductWiseSaleRegisterURL: string = this.URLHostName + "/api/Erp/GetProductWiseSaleRegister";

  headers: any;
  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  }

  GetOutStandingCustomer(filterName: any, cityName: any, custName: any, mobileNum: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('cityName', cityName).set('custName', custName).set('mobileNum', mobileNum);
    return this.httpClient.get<any>(this.getOutStandingCustomerURL, { 'params': params, 'headers': this.headers });
  }
  GetOutStandingDealers(filterName: any, partyName: any, mobileNumber: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('partyName', partyName).set('mobileNumber', mobileNumber);
    return this.httpClient.get<any>(this.getOutStandingDealorURL, { 'params': params, 'headers': this.headers });
  }
  GetCashBookData(billStartDate: any, billEndDate: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('billStartDate', billStartDate).set('billEndDate', billEndDate);
    return this.httpClient.get<any>(this.getCashBookURL, { 'params': params, 'headers': this.headers });
  }
  GetOrnmentStock(name: any, entryStartDate: any, entryEndDate: any, particulars: any, prefix: any){
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('entryStartDate', entryStartDate).set('entryEndDate', entryEndDate).set('particulars', particulars).set('prefix', prefix);
    return this.httpClient.get<any>(this.getOrnmentStockURL, { 'params': params, 'headers': this.headers });
  }
  GetBullionStock(name: any, entryStartDate: any, entryEndDate: any, particulars: any){
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('entryStartDate', entryStartDate).set('entryEndDate', entryEndDate).set('particulars', particulars);
    return this.httpClient.get<any>(this.getBullionStockURL, { 'params': params, 'headers': this.headers });
  }
  GetSaleRegistersData(name: any, billStartDate: any, billEndDate: any,custName: any, jewelType: any):  Observable<any>{
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('billStartDate', billStartDate).set('billEndDate', billEndDate).set('custName', custName).set('jewelType', jewelType);
    return this.httpClient.get<any>(this.getSaleRegisterURL, { 'params': params, 'headers': this.headers });
  }
  GetBankTransactions(name: any, depStartDate: any, depEndDate: any,accno: any, transtype: any, mode: any) : Observable<any>{
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('depStartDate', depStartDate).set('depEndDate', depEndDate).set('accno', accno).set('transtype', transtype).set('mode', mode);
    return this.httpClient.get<any>(this.getBankTransactionsURL, { 'params': params, 'headers': this.headers });
  }
  GetBankTransactionsOpening(depStartDate: any, accno: any, mode: any) : Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('depStartDate', depStartDate).set('accno', accno).set('mode', mode);
    return this.httpClient.get<any>(this.getBankTransactionsOpeningURL, { 'params': params, 'headers': this.headers });
  }
  GetProductWiseSaleRegister(name: any, billStartDate: any, billEndDate: any, jewelType: any, productName: any, counterName: any, prefix: any){
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('billStartDate', billStartDate).set('billEndDate', billEndDate).set('jewelType', jewelType).set('productName', productName).set('counterName', counterName).set('prefix', prefix);
    return this.httpClient.get<any>(this.getProductWiseSaleRegisterURL, { 'params': params, 'headers': this.headers });
  }
}
