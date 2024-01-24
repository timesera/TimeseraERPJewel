import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupdialogComponent } from './popupdialog/popupdialog.component';


@Injectable({
  providedIn: 'root'
})
export class ErpService {
  getSmithIssueData() {
    throw new Error('Method not implemented.');
  }

  private URLHostName = "http://www.service.timeseraerp.in";
  getTagGenerationDetails: string = this.URLHostName + "/api/Erp/GetTagGenerationDetails";
  getTagGenerationDetailsByFilterURL: string = this.URLHostName + "/api/Erp/GetTagGenerationDetailsByFilter";
  getOutStandingCustomerURL: string = this.URLHostName + "/api/Erp/GetOutStandingCustomer";
  getOutStandingDealorURL: string = this.URLHostName + "/api/Erp/GetOutStandingDealers";
  getSmithIssueRegisterURL: string = this.URLHostName + "/api/Erp/GetGoldSmithIssueRegister";
  getGoldSmithReceiptRegisterURL: string = this.URLHostName + "/api/Erp/GetGoldSmithReceiptRegister";

  getCashBookURL: string = this.URLHostName + "/api/Erp/GetCashBook";
  getStockBalanceURL: string = this.URLHostName + "/api/Erp/GetStockBalances"
  getOrnmentStockURL: string = this.URLHostName + "/api/Erp/GetOrnmentStock";
  getBullionStockURL: string = this.URLHostName + "/api/Erp/GetBullionStock";
  getSaleRegisterURL: string = this.URLHostName + "/api/Erp/GetSaleRegister";
  getBankTransactionsURL: string = this.URLHostName + "/api/Erp/GetBankTransactions";
  getBankTransactionsOpeningURL: string = this.URLHostName + "/api/Erp/GetBankTransactionsOpening";
  getProductWiseSaleRegisterURL: string = this.URLHostName + "/api/Erp/GetProductWiseSaleRegister";
  getReceiptRegisterURL: string = this.URLHostName + "/api/Erp/GetReceiptRegister";
  getProductURL: string = this.URLHostName + "/api/Erp/GetTagGenerationDetails";
  getProductDataURL: string = this.URLHostName + "/api/Erp/GetMainProductDetails";
  getCounterNetDataURL: string = this.URLHostName + "/api/Erp/GetCounterNetSummary";
  getStockPrefixDataURL: string = this.URLHostName + "/api/Erp/GetPrefixSummary";
  getOrderRegisterDataURL: string = this.URLHostName + "/api/Erp/GetOrderRegister";
  getMainBookRegisterDataURL: string = this.URLHostName + "/api/Erp/GetMailBookRegister";
  getPendingEstimationDataURL: string = this.URLHostName + "/api/Erp/GetPendingEstimation";
  getTotalEstimationDataURL: string = this.URLHostName + "/api/Erp/GetTotalEstimation";
  getMeltingBookDataURL: string = this.URLHostName + "/api/Erp/GetMeltingBookRegistry";
  getDealorWiseSumryURL: string = this.URLHostName + "/api/Erp/GetDealerSummary";
  getOrnamntPurchaseURL: string = this.URLHostName + "/api/Erp/GetOrnmentPurchaseRegister";
  getPurchaseRtrnURL: string = this.URLHostName + "/api/Erp/GetPurchaseReturnRegister";
  getBullionPurchaseURL: string = this.URLHostName + "/api/Erp/GetBullionPurchaseRegister";
  //DashBoard
  getDailyRatesURL: string = this.URLHostName + "/api/DashBoard/GetDailyRates";
  getGenBillNoURL: string = this.URLHostName + "/api/DashBoard/GetGenBillNo";
  getFirmConfigureURL: string = this.URLHostName + "/api/DashBoard/GetFirmConfigure";
  getTotalBillsURL: string = this.URLHostName + "/api/DashBoard/GetTotalBills";
  getAnniversaryWishBoxDetailsURL: string = this.URLHostName + "/api/DashBoard/GetAnniversaryWishBoxDetails";
  getBirthDayWishBoxDetailsURL: string = this.URLHostName + "/api/DashBoard/GetBirthDayWishBoxDetails";
  getTodayDuesURL: string = this.URLHostName + "/api/DashBoard/GetTodayDues";
  getMonthDuesURL: string = this.URLHostName + "/api/DashBoard/GetMonthDues";
  getTotalDuesURL: string = this.URLHostName + "/api/DashBoard/GetTotalDues";
  getDayTranscationsURL: string = this.URLHostName + "/api/Erp/GetDayTransactionDetails";
  getOldGoldBookMainTypeURL: string = this.URLHostName + "/api/Erp/GetOldGoldBookMainType";
  getOldGoldBookDetailsURL: string = this.URLHostName + "/api/Erp/GetOldGoldBookDetails";
  getDayGlanceDetailsURL: string = this.URLHostName + "/api/Erp/GetDayGlanceDetails";

  headers: any;
  constructor(private httpClient: HttpClient, private cookieService: CookieService,
    private toastr: ToastrService, public dialog: MatDialog) {
  }

  showSuccess(message: any, title: any) {
    this.toastr.success(message, title);
  }
  showError(message: any, title: any) {
    this.toastr.error(message, title);
  }
  showWarning(message: any, title: any) {
    this.toastr.warning(message, title);
  }

  openModal(title: string, list: string) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: title,
      list: list
    };
    dialogConfig.minWidth = 400;

    const dialogRef = this.dialog.open(PopupdialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  GetTagGenerationDetails(filterName: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName);
    return this.httpClient.get<any>(this.getTagGenerationDetails, { 'params': params, 'headers': this.headers });
  }
  GetTagGenerationDetailsByFilter(tagFilter: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    return this.httpClient.post<any>(this.getTagGenerationDetailsByFilterURL, tagFilter, { 'headers': this.headers });
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
  GetOrnmentStock(name: any, entryStartDate: any, entryEndDate: any, particulars: any, prefix: any) {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('entryStartDate', entryStartDate).set('entryEndDate', entryEndDate).set('particulars', particulars).set('prefix', prefix);
    return this.httpClient.get<any>(this.getOrnmentStockURL, { 'params': params, 'headers': this.headers });
  }
  GetBullionStock(name: any, entryStartDate: any, entryEndDate: any, particulars: any) {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('entryStartDate', entryStartDate).set('entryEndDate', entryEndDate).set('particulars', particulars);
    return this.httpClient.get<any>(this.getBullionStockURL, { 'params': params, 'headers': this.headers });
  }
  GetSaleRegistersData(name: any, billStartDate: any, billEndDate: any, custName: any, jewelType: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('billStartDate', billStartDate).set('billEndDate', billEndDate).set('custName', custName).set('jewelType', jewelType);
    return this.httpClient.get<any>(this.getSaleRegisterURL, { 'params': params, 'headers': this.headers });
  }
  GetBankTransactions(name: any, depStartDate: any, depEndDate: any, accno: any, transtype: any, mode: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('depStartDate', depStartDate).set('depEndDate', depEndDate).set('accno', accno).set('transtype', transtype).set('mode', mode);
    return this.httpClient.get<any>(this.getBankTransactionsURL, { 'params': params, 'headers': this.headers });
  }
  GetBankTransactionsOpening(depStartDate: any, accno: any, mode: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('depStartDate', depStartDate).set('accno', accno).set('mode', mode);
    return this.httpClient.get<any>(this.getBankTransactionsOpeningURL, { 'params': params, 'headers': this.headers });
  }
  GetProductWiseSaleRegister(name: any, billStartDate: any, billEndDate: any, jewelType: any, productName: any, counterName: any, prefix: any) {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('name', name).set('billStartDate', billStartDate).set('billEndDate', billEndDate).set('jewelType', jewelType).set('productName', productName).set('counterName', counterName).set('prefix', prefix);
    return this.httpClient.get<any>(this.getProductWiseSaleRegisterURL, { 'params': params, 'headers': this.headers });
  }
  GetReceiptRegister(recStartDate: any, recEndDate: any, custName: any) {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('recStartDate', recStartDate).set('recEndDate', recEndDate).set('custName', custName);
    return this.httpClient.get<any>(this.getReceiptRegisterURL, { 'params': params, 'headers': this.headers });
  }
  GetProductService(filterName: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName);
    return this.httpClient.get<any>(this.getProductURL, { 'params': params, 'headers': this.headers });
  }
  GetProductData(mName: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('mName', mName);
    return this.httpClient.get<any>(this.getProductDataURL, { 'params': params, 'headers': this.headers });
  }
  GetCounterNetData(mName: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('mName', mName);
    return this.httpClient.get<any>(this.getCounterNetDataURL, { 'params': params, 'headers': this.headers });
  }
  GetPuritySummaryData(mName: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('mName', mName);
    return this.httpClient.get<any>(this.getStockPrefixDataURL, { 'params': params, 'headers': this.headers });
  }
  GetOrderRegisterData(orderStartDate: any, orderEndDate: any, custName: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('orderStartDate', orderStartDate).set('orderEndDate', orderEndDate).set('custName', custName);
    return this.httpClient.get<any>(this.getOrderRegisterDataURL, { 'params': params, 'headers': this.headers });
  }
  GetMainBookRegister(filterName: any, dealerName: any, mobileNo: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('dealerName', dealerName).set('mobileNo', mobileNo);
    return this.httpClient.get<any>(this.getMainBookRegisterDataURL, { 'params': params, 'headers': this.headers });
  }
  GetPendingEstimation(estStartDate: any, estEndDate: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('estStartDate', estStartDate).set('estEndDate', estEndDate);
    return this.httpClient.get<any>(this.getPendingEstimationDataURL, { 'params': params, 'headers': this.headers });
  }
  GetTotalEstimation(estStartDate: any, estEndDate: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('estStartDate', estStartDate).set('estEndDate', estEndDate);
    return this.httpClient.get<any>(this.getTotalEstimationDataURL, { 'params': params, 'headers': this.headers });
  }
  GetMeltingBookRegister(filterName: any, startDate: any, endDate: any, jewelType: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('startDate', startDate).set('endDate', endDate).set('jewelType', jewelType);
    return this.httpClient.get<any>(this.getMeltingBookDataURL, { 'params': params, 'headers': this.headers });
  }
  GetDealorWiseSumryRegister(filterName: any, mName: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('mName', mName);
    return this.httpClient.get<any>(this.getDealorWiseSumryURL, { 'params': params, 'headers': this.headers });
  }
  GetOrnmentPurchaseRegister(filterName: any, entryStartDate: any, entryEndDate: any, partyName: any, pType: any, prefix: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('entryStartDate', entryStartDate).set('entryEndDate', entryEndDate).set('partyName', partyName).set('pType', pType).set('prefix', prefix);
    return this.httpClient.get<any>(this.getOrnamntPurchaseURL, { 'params': params, 'headers': this.headers });
  }
  GetPurchaseReturnRegister(filterName: any, invStartDate: any, invEndDate: any, partyName: any, pType: any, prefix: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('invStartDate', invStartDate).set('invEndDate', invEndDate).set('partyName', partyName).set('pType', pType).set('prefix', prefix);
    return this.httpClient.get<any>(this.getPurchaseRtrnURL, { 'params': params, 'headers': this.headers });
  }
  GetBullionPurchaseRegister(filterName: any, invStartDate: any, invEndDate: any, dealer: any, pType: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('filterName', filterName).set('invStartDate', invStartDate).set('invEndDate', invEndDate).set('dealer', dealer).set('pType', pType);
    return this.httpClient.get<any>(this.getBullionPurchaseURL, { 'params': params, 'headers': this.headers });
  }

  GetDailyRates(date: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('date', date);
    return this.httpClient.get<any>(this.getDailyRatesURL, { 'params': params, 'headers': this.headers });
  }
  GetGenBillNo(fYear: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('fYear', fYear);
    return this.httpClient.get<any>(this.getGenBillNoURL, { 'params': params, 'headers': this.headers });
  }
  GetFirmConfigure(): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    return this.httpClient.get<any>(this.getFirmConfigureURL, { 'headers': this.headers });
  }
  GetTotalBills(fYear: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('fYear', fYear);
    return this.httpClient.get<any>(this.getTotalBillsURL, { 'params': params, 'headers': this.headers });
  }
  GetAnniversaryWishBoxDetails(date: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('date', date);
    return this.httpClient.get<any>(this.getAnniversaryWishBoxDetailsURL, { 'params': params, 'headers': this.headers });
  }
  GetBirthDayWishBoxDetails(date: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('date', date);
    return this.httpClient.get<any>(this.getBirthDayWishBoxDetailsURL, { 'params': params, 'headers': this.headers });
  }
  GetTodayDues(date: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('date', date);
    return this.httpClient.get<any>(this.getTodayDuesURL, { 'params': params, 'headers': this.headers });
  }
  GetMonthDues(date: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('date', date);
    return this.httpClient.get<any>(this.getMonthDuesURL, { 'params': params, 'headers': this.headers });
  }
  GetTotalDues(): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    return this.httpClient.get<any>(this.getTotalDuesURL, { 'headers': this.headers });
  }
  GetSmithIssueRegister(startDate: any, endDate: any, DealerName: any, issueNo: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('DealerName', DealerName).set('issueNo', issueNo);
    return this.httpClient.get<any>(this.getSmithIssueRegisterURL, { 'params': params, 'headers': this.headers });
  }
  GetGoldSmithReceiptRegister(startDate: any, endDate: any, DealerName: any, recNo: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('DealerName', DealerName).set('recNo', recNo);
    return this.httpClient.get<any>(this.getGoldSmithReceiptRegisterURL, { 'params': params, 'headers': this.headers });
  }
  GetStockBalance(): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    return this.httpClient.get<any>(this.getStockBalanceURL, { 'headers': this.headers });
  }
  GetDayTranscations(startDate: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('startDate', startDate)
    return this.httpClient.get<any>(this.getDayTranscationsURL, { 'params': params, 'headers': this.headers });
  }
  GetOldGoldBookMainType(): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    return this.httpClient.get<any>(this.getOldGoldBookMainTypeURL, { 'headers': this.headers });
  }

  GetOldGoldBookDetails(startDate: any, endDate: any, mainType: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('mainType', mainType);
    return this.httpClient.get<any>(this.getOldGoldBookDetailsURL, { 'params': params, 'headers': this.headers });
  }
  GetDayGlanceDetails(startDate: any, endDate: any): Observable<any> {
    this.headers = new HttpHeaders().set('tenantName', this.cookieService.get('tenantName').toString());
    const params = new HttpParams().set('startDate', startDate).set('endDate', endDate);
    return this.httpClient.get<any>(this.getDayGlanceDetailsURL, { 'params': params, 'headers': this.headers });
  }
}

