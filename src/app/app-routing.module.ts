import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeseraloginComponent } from './timeseralogin/timeseralogin.component';
import { ErpComponent } from './erp/erp.component';
import { PurchaseEstimationComponent } from './purchase-estimation/purchase-estimation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CashBookComponent } from './cash-book/cash-book.component';
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
import { OldGoldSilverBookComponent } from './old-gold-silver-book/old-gold-silver-book.component';
import { DayGlanceComponent } from './day-glance/day-glance.component';
import { SaleRegisterComponent } from './sale-register/sale-register.component';
import { ProductWiseSaleSummaryComponent } from './product-wise-sale-summary/product-wise-sale-summary.component';
import { DayTranscationsComponent } from './day-transcations/day-transcations.component';
import { OrderRegisterComponent } from './order-register/order-register.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderStatusRegisterComponent } from './order-status-register/order-status-register.component';
import { RepairRecevialsRegisterComponent } from './repair-recevials-register/repair-recevials-register.component';
import { RepairDeliveryRegisterComponent } from './repair-delivery-register/repair-delivery-register.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { JournalsComponent } from './journals/journals.component';
import { CustomerLeaderComponent } from './customer-leader/customer-leader.component';
import { OutstandingCustomersComponent } from './outstanding-customers/outstanding-customers.component';
import { OutstandingDealersComponent } from './outstanding-dealers/outstanding-dealers.component';
import { SizeWiseSalesComponent } from './size-wise-sales/size-wise-sales.component';
import { ReOrderStockComponent } from './re-order-stock/re-order-stock.component';
import { SizeWiseStockComponent } from './size-wise-stock/size-wise-stock.component';
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
import { CustomerreceiptregisterComponent } from './customerreceiptregister/customerreceiptregister.component';
import { DiamondsalesComponent } from './diamondsales/diamondsales.component';
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
const routes: Routes = [
  {
    path: '', component: TimeseraloginComponent
  },
  {
    path: 'erp', component: ErpComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'StockBalance', component: StockBalanceComponent
      },
      {
        path: 'PuritySummary', component: PuritySummaryComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'BillingStockGS11', component: BillingStockGS11Component
      },
      {
        path: 'OldGoldSilverBook', component: OldGoldSilverBookComponent
      },

      {
        path: 'DayGlance', component: DayGlanceComponent
      },

      {
        path: 'SaleRegister', component: SaleRegisterComponent
      },
      {
        path: 'ProductWiseSaleSummary', component: ProductWiseSaleSummaryComponent
      },
      {
        path: 'DayTranscations', component: DayTranscationsComponent
      },
      {
        path: 'OrderStatusRegister', component: OrderStatusRegisterComponent
      },
      {
        path: 'RepairRecevialsRegister', component: RepairRecevialsRegisterComponent
      },
      {
        path: 'RepairDeliveryRegister', component: RepairDeliveryRegisterComponent
      },
      {
        path: 'BankStatement', component: BankStatementComponent
      },
      {
        path: 'Journals', component: JournalsComponent

      },
      {
        path: 'CustomerLeader', component: CustomerLeaderComponent

      },
      {
        path: 'OutstandingCustomers', component: OutstandingCustomersComponent

      },
      {
        path: 'MailBook', component: MailBookComponent
      },
      {
        path: 'InvoiceWiseOutstanding', component: InvoiceWiseOutstandingComponent
      },
      {
        path: 'CustomerLeader', component: CustomerLeaderComponent
      },
      {
        path: 'CustomerVistingInfo', component: CustomerVistingInfoComponent
      },
      {
        path: 'PrevilageCardPoints', component: PrevilageCardPointsComponent
      },
      {
        path: 'PrevilageCardMemberDetails', component: PrevilageCardMemberDetailsComponent
      },
      {
        path: 'smithIssueRegister', component: SmithIssueRegisterComponent
      },

      {
        path: 'SmithReceivalRegister', component: SmithReceivalRegisterComponent
      },

      {
        path: 'JobWorkIssueRegister', component: JobWorkIssueRegisterComponent
      },
      {
        path: 'JobWorkReceivalRegister', component: JobWorkReceivalRegisterComponent
      },
      {
        path: 'OutstandingDealers', component: OutstandingDealersComponent

      },
      {
        path: 'SizeWiseStock', component: SizeWiseStockComponent

      },
      {
        path: 'SizeWiseSales', component: SizeWiseSalesComponent

      },
      {
        path: 'ReOrderStock', component: ReOrderStockComponent

      },
      {
        path: 'ProductWiseSaleSummary', component: ProductWiseSaleSummaryComponent

      },
      {
        path: 'CustomerPurchaseAnalysis', component: CustomerPurchaseAnalysisComponent
      },
      {
        path: 'cashbook', component: CashBookComponent
      },
      {
        path: 'PurchaseEstimation', component: PurchaseEstimationComponent
      }, 
      {
        path: 'EstimationRegister', component: EstimationRegisterComponent
      },
      {
        path: 'PurchaseEstimationRegister', component: PurchaseEstimationRegisterComponent
      },
      {
        path: 'ProductSummary', component: ProductSummaryComponent
      },
      {
        path: "CounterChartComponent", component: CounterChartComponent
      },
      {
        path: 'TagDetails', component: TagDetailsComponent
      },
      {
        path: 'stockchart', component: StockChartComponent
      },
      {
        path: 'OrnamentStock', component: OrnamentStockGS12Component
      },
      {
        path: 'CounterNetSummary', component: CounterNetSummaryComponent
      },
      {
        path: 'OrderRegister', component: OrderRegisterComponent
      },
      {
        path: 'OrderStatus', component: OrderStatusComponent
      },
      {
        path: 'CustomerReceeipt', component: CustomerreceiptregisterComponent
      },
      {
        path: 'DiamonsSales', component: DiamondsalesComponent
      },
      {
        path: 'OrnamentPurchaseRegister', component: OrnamentPurchaseRegisterComponent
      },
      {
        path: 'PurchaseReturnRegister', component: PurchaseReturnRegisterComponent
      },
      {
        path: 'BullionPurchaseRegister', component: BullionPurchaseRegisterComponent
      },
      {
        path: 'OGSRegister', component: SilverRegisterComponent
      },
      {
        path: 'StonePurchaseRegister', component: StonePurchaseRegisterComponent
      },
      {
        path: 'MeltingRegister', component: MeltingRegisterComponent
      },
      {
        path: 'DealorWiseStockSumary', component: DealorWiseStockSummaryComponent
      },
      {
        path: 'CounterWiseSales', component: CounterWiseSalesComponent
      },
      {
        path: 'EmplyeWiseSales', component: EmployeeWiseSalesComponent
      },
      {
        path: 'PurtyWiseSales', component: PurityWiseSalesComponent
      },
      {
        path: 'DealerPymntRgstr', component: DealerPaymentRegisterComponent
      },
      {
        path: 'DealrLdgr', component: DealerLedgerComponent
      },
      {
        path: '**', component: DashboardComponent
      },
      
    ]
  },
  {
    path: '**', component: TimeseraloginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
