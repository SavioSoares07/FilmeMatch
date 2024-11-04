import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNg } from '../primeNg/primeng.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, PrimeNg],
  exports: [HeaderComponent, PrimeNg],
})
export class ComponentsModule {}
