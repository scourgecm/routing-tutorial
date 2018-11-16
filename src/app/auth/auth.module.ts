import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [CommonModule, FormsModule, AuthRoutingModule],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
