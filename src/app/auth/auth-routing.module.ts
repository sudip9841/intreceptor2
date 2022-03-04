import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { ChildGuard } from './guards/child.guard';

const routes: Routes = [
  {path:'',component:AuthComponent,
  // canActivate:[AuthGuard],
  // canActivateChild:[ChildGuard],
  children : [{path:'login',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
{path:'register',loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
