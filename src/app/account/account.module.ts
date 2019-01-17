import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, PerfilComponent, AccountComponent],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class AccountModule {}
