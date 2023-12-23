import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeseraloginComponent } from './timeseralogin/timeseralogin.component';
import { ErpComponent } from './erp/erp.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
        path: '**', component: DashboardComponent
      }
    ]
  },
  {
    path: '**', component: TimeseraloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
