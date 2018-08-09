import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstComponent1 } from './firstcomponent4/firstcomponent4.component';
import {Secondcomponent4Component} from './firstcomponent4/secondcomponent4/secondcomponent4.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstComponent1,Secondcomponent4Component
    ],
    exports:[
      FirstComponent1,
      Secondcomponent4Component
    ]
})
export class Scenario4moduleModule { }
