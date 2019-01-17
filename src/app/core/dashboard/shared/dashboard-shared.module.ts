import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RouterModule } from '@angular/router';
import { DashboardSidevarComponent } from './dashboard-sidevar/dashboard-sidevar.component';

@NgModule({
  declarations: [
    DashboardNavComponent, DashboardSidevarComponent
  ],
  imports: [ CommonModule, AppMaterialModule, RouterModule],
  exports: [DashboardNavComponent, DashboardSidevarComponent],
  providers: [],
})
export class DashboardSharedModule {}
