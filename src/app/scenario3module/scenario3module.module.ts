import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './firstcomponent3/firstcomponent3.component';
import { Secondcomponent3Component } from './firstcomponent3/secondcomponent3/secondcomponent3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FirstComponent, Secondcomponent3Component],
  exports:[FirstComponent, Secondcomponent3Component]
})
export class Scenario3moduleModule { }
