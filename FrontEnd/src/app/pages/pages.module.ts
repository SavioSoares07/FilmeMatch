import { NgModule } from '@angular/core';
//* Imports Pages
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

//* Import Angular Material
import { AngularMaterial } from '../material-angular/material-angular.module';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [AngularMaterial, RouterModule, ComponentsModule, CommonModule],
  exports: [
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    HomeComponent,
  ],
})
export class PagesModule {}
