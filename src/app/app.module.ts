import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { EstimationComponent } from './estimation/estimation.component';
import { PurchaseEstimationComponent } from './purchase-estimation/purchase-estimation.component';
import { EstimationRegisterComponent } from './estimation-register/estimation-register.component';
import { PurchaseEstimationRegisterComponent } from './purchase-estimation-register/purchase-estimation-register.component';
import { TagDetailsComponent } from './tag-details/tag-details.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { OrnamentStockGS12Component } from './ornament-stock-gs12/ornament-stock-gs12.component';
import { CounterNetSummaryComponent } from './counter-net-summary/counter-net-summary.component';
import { ProductSummaryComponent } from './product-summary/product-summary.component';
import { CounterChartComponent } from './counter-chart/counter-chart.component';
import { StockBalanceComponent } from './stock-balance/stock-balance.component';
import { PuritySummaryComponent } from './purity-summary/purity-summary.component';
import { BillingStockGS11Component } from './billing-stock-gs11/billing-stock-gs11.component';
import { DayGlanceComponent } from './day-glance/day-glance.component';
import { OldGoldSilverBookComponent } from './old-gold-silver-book/old-gold-silver-book.component';
import { SaleRegisterComponent } from './sale-register/sale-register.component';
import { OrderRegisterComponent } from './order-register/order-register.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderStatusRegisterComponent } from './order-status-register/order-status-register.component';
import { RepairRecevialsRegisterComponent } from './repair-recevials-register/repair-recevials-register.component';
import { RepairDeliveryRegisterComponent } from './repair-delivery-register/repair-delivery-register.component';
import { DayTranscationsComponent } from './day-transcations/day-transcations.component';
import { CashBookComponent } from './cash-book/cash-book.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { JournalsComponent } from './journals/journals.component';
import { CustomerLeaderComponent } from './customer-leader/customer-leader.component';
import { OutstandingCustomersComponent } from './outstanding-customers/outstanding-customers.component';
import { OutstandingDealersComponent } from './outstanding-dealers/outstanding-dealers.component';
import { SizeWiseStockComponent } from './size-wise-stock/size-wise-stock.component';
import { ReOrderStockComponent } from './re-order-stock/re-order-stock.component';
import { ProductWiseSaleSummaryComponent } from './product-wise-sale-summary/product-wise-sale-summary.component';
import { SizeWiseSalesComponent } from './size-wise-sales/size-wise-sales.component';
import { CustomerPurchaseAnalysisComponent } from './customer-purchase-analysis/customer-purchase-analysis.component';
import { MailBookComponent } from './mail-book/mail-book.component';
import { InvoiceWiseOutstandingComponent } from './invoice-wise-outstanding/invoice-wise-outstanding.component';
import { CustomerVistingInfoComponent } from './customer-visting-info/customer-visting-info.component';
import { PrevilageCardPointsComponent } from './previlage-card-points/previlage-card-points.component';
import { PrevilageCardMemberDetailsComponent } from './previlage-card-member-details/previlage-card-member-details.component';
import { SmithIssueRegisterComponent } from './smith-issue-register/smith-issue-register.component';
import { SmithReceivalRegisterComponent } from './smith-receival-register/smith-receival-register.component';
import { JobWorkIssueRegisterComponent } from './job-work-issue-register/job-work-issue-register.component';
import { JobWorkReceivalRegisterComponent } from './job-work-receival-register/job-work-receival-register.component';
import { TimeseraloginComponent } from './timeseralogin/timeseralogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErpComponent } from './erp/erp.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomerreceiptregisterComponent } from './customerreceiptregister/customerreceiptregister.component';
import { DiamondsalesComponent } from './diamondsales/diamondsales.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { OrnamentPurchaseRegisterComponent } from './ornament-purchase-register/ornament-purchase-register.component';
import { PurchaseReturnRegisterComponent } from './purchase-return-register/purchase-return-register.component';
import { BullionPurchaseRegisterComponent } from './bullion-purchase-register/bullion-purchase-register.component';
import { SilverRegisterComponent } from './oldGold/silver-register/silver-register.component';
import { StonePurchaseRegisterComponent } from './stone-purchase-register/stone-purchase-register.component';
import { MeltingRegisterComponent } from './melting-register/melting-register.component';
import { DealorWiseStockSummaryComponent } from './dealor-wise-stock-summary/dealor-wise-stock-summary.component';
import { CounterWiseSalesComponent } from './counter-wise-sales/counter-wise-sales.component';
import { EmployeeWiseSalesComponent } from './employee-wise-sales/employee-wise-sales.component';
import { PurityWiseSalesComponent } from './purity-wise-sales/purity-wise-sales.component';
import { DealerPaymentRegisterComponent } from './dealer-payment-register/dealer-payment-register.component';
import { DealerLedgerComponent } from './dealer-ledger/dealer-ledger.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PopupdialogComponent } from './popupdialog/popupdialog.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    EstimationComponent,
    PurchaseEstimationComponent,
    EstimationRegisterComponent,
    PurchaseEstimationRegisterComponent,
    TagDetailsComponent,
    StockChartComponent,
    OrnamentStockGS12Component,
    CounterNetSummaryComponent,
    ProductSummaryComponent,
    TimeseraloginComponent,
    CounterChartComponent,
    StockBalanceComponent,
    PuritySummaryComponent,
    BillingStockGS11Component,
    DayGlanceComponent,
    OldGoldSilverBookComponent,
    SaleRegisterComponent,
    OrderRegisterComponent,
    OrderStatusComponent,
    OrderStatusRegisterComponent,
    RepairRecevialsRegisterComponent,
    RepairDeliveryRegisterComponent,
    DayTranscationsComponent,
    CashBookComponent,
    BankStatementComponent,
    JournalsComponent,
    CustomerLeaderComponent,
    OutstandingCustomersComponent,
    OutstandingDealersComponent,
    SizeWiseStockComponent,
    ReOrderStockComponent,
    ProductWiseSaleSummaryComponent,
    SizeWiseSalesComponent,
    CustomerPurchaseAnalysisComponent,
    MailBookComponent,
    InvoiceWiseOutstandingComponent,
    CustomerVistingInfoComponent,
    PrevilageCardPointsComponent,
    PrevilageCardMemberDetailsComponent,
    SmithIssueRegisterComponent,
    SmithReceivalRegisterComponent,
    JobWorkIssueRegisterComponent,
    JobWorkReceivalRegisterComponent,
    TimeseraloginComponent,
    DashboardComponent,
    ErpComponent,
    CustomerreceiptregisterComponent,
    DiamondsalesComponent,
    OrnamentPurchaseRegisterComponent,
    PurchaseReturnRegisterComponent,
    BullionPurchaseRegisterComponent,
    SilverRegisterComponent,
    StonePurchaseRegisterComponent,
    MeltingRegisterComponent,
    DealorWiseStockSummaryComponent,
    CounterWiseSalesComponent,
    EmployeeWiseSalesComponent,
    PurityWiseSalesComponent,
    DealerPaymentRegisterComponent,
    DealerLedgerComponent,
    PopupdialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    // MatTableDataSource,
    MatSidenavModule,
    MatMenuModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    CommonModule,
    
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
