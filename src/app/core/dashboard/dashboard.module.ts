import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from 'src/app/route/dashboard.router';
import { MainComponent } from './main/main.component';
import { DashboardSharedModule } from './shared/dashboard-shared.module';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DashboardSharedModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    AppMaterialModule
  ],
  exports: [RouterModule],
  providers: [],
})
export class DashboardModule { }
