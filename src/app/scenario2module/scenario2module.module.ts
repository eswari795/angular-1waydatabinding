import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario2componentComponent } from './scenario2component/scenario2component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Scenario2componentComponent],
  exports:[
    Scenario2componentComponent

  ]
})
export class Scenario2Module { }
