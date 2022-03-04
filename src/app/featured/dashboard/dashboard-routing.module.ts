import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResolver } from './dashboard.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',
  resolve:{
    data: DashboardResolver
  },
  component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
