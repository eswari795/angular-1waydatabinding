import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario1componentComponent } from './scenario1component/scenario1component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Scenario1componentComponent],
  exports:[
    Scenario1componentComponent
  ]
})
export class Scenario1Module { }
