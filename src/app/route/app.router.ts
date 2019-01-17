import { Routes } from '@angular/router';
import { IndexComponent } from '../core/index/index.component';
import { LoginComponent } from '../core/account/login/login.component';
import { RegisterComponent } from '../core/account/register/register.component';

export const APP_ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', loadChildren: './../core/dashboard/dashboard.module#DashboardModule'},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
