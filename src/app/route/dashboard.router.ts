import { Routes } from '@angular/router';
import { DashboardSidevarComponent } from '../core/dashboard/shared/dashboard-sidevar/dashboard-sidevar.component';
import { MainComponent } from '../core/dashboard/main/main.component';
import { AreaComponent } from '../core/dashboard/domain/area/area.component';
import { AreaListComponent } from '../core/dashboard/domain/area/area-list/area-list.component';
import { AreaAddComponent } from '../core/dashboard/domain/area/area-add/area-add.component';
import { AreaEditComponent } from '../core/dashboard/domain/area/area-edit/area-edit.component';
import { AreaDeleteComponent } from '../core/dashboard/domain/area/area-delete/area-delete.component';

export const AREA_ROUTES: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '', component: AreaComponent, children: [
    {path: 'list', component: AreaListComponent},
    {path: 'add', component: AreaAddComponent},
    {path: 'edit/:id', component: AreaEditComponent},
    {path: 'delete/:id', component: AreaDeleteComponent}
  ]}
];
export const DASHBOARD_ROUTES: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '', component: DashboardSidevarComponent, children: [
    {path: 'main', component: MainComponent},
    {path: 'area', loadChildren: './../core/dashboard/domain/area/area.module#AreaModule'}
  ]}
];
