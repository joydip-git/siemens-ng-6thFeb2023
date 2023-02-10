import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AUTH_API_URL, AUTH_API_URL_TOKEN, AUTH_SERVICE_TOKEN, AUTH_SERVICE_TYPE } from 'src/app/constants/constants';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AUTH_API_URL_TOKEN,
      useValue: AUTH_API_URL
    },
    {
      provide: AUTH_SERVICE_TOKEN,
      useClass: AUTH_SERVICE_TYPE
    }
  ]
})
export class CoreModule { }
