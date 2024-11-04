import { NgModule } from '@angular/core';
//Imports PrimeNG
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [StepperModule, ButtonModule],
  exports: [StepperModule, ButtonModule],
})
export class PrimeNg {}
