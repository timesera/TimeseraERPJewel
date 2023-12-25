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
        path: '**', component: DashboardComponent
      }
    ]
  },
  {
    path: '**', component: TimeseraloginComponent
  },
  {
    path: 'PurchaseEstimation', component: PurchaseEstimationComponent
  }, {
    path: 'EstimationRegister', component: EstimationRegisterComponent
  },
  {
    path: 'PurchaseEstimationRegister', component: PurchaseEstimationRegisterComponent
  },
  {
    path: 'ProductSummaryComponent', component: ProductSummaryComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
