import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin-page', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
  { path: 'user-page', loadChildren: () => import('./modules/user-pages/user-pages.module').then(m => m.UserPagesModule) },
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
