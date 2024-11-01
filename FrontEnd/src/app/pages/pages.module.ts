import { NgModule } from '@angular/core';
//* Imports Pages
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

//* Import Angular Material
import { AngularMaterial } from '../material-angular/material-angular.module';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, NotFoundComponent, RegisterComponent],
  imports: [AngularMaterial, RouterModule],
  exports: [LoginComponent, NotFoundComponent, RegisterComponent],
})
export class PagesModule {}
