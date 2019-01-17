import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [ CommonModule,
    SharedModule,
    AccountModule
  ],
  exports: [
    SharedModule,
    AccountModule
  ],
  providers: [],
})
export class CoreModule {}
