import { NgModule } from '@angular/core';
//* Imports Pages
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

//* Import Angular Material
import { AngularMaterial } from '../material-angular/material-angular.module';

@NgModule({
  declarations: [LoginComponent, NotFoundComponent],
  imports: [AngularMaterial],
  exports: [LoginComponent, NotFoundComponent],
})
export class PagesModule {}
