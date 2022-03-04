import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactiveGuard } from './guards/canactive.guard';
import { LoadGuard } from './guards/load.guard';

const routes: Routes = [
  {path:'auth',
  // canLoad:[LoadGuard],
  // canActivate:[CanactiveGuard],
loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
{
  path:'featured',
  loadChildren:()=> import('./featured/featured.module').then(m=>m.FeaturedModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
