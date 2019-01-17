import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RouterModule } from '@angular/router';
import { AREA_ROUTES } from 'src/app/route/dashboard.router';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaAddComponent } from './area-add/area-add.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
import { AreaDeleteComponent } from './area-delete/area-delete.component';
import { StoreModule } from '@ngrx/store';
import { areaReducer } from './store/reducers/area.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AreaEffects } from './store/effects/area.effects';

@NgModule({
  declarations: [
    AreaComponent,
    AreaListComponent,
    AreaAddComponent,
    AreaEditComponent,
    AreaDeleteComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(AREA_ROUTES),
    StoreModule.forFeature('area', areaReducer),
    EffectsModule.forFeature([AreaEffects])
  ],
  exports: [RouterModule, AreaComponent],
  providers: [],
})
export class AreaModule { }
