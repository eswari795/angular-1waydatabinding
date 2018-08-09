import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { SubchildComponent } from './parent/child/subchild/subchild.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent, ChildComponent, SubchildComponent],
  exports:[ParentComponent, ChildComponent, SubchildComponent]
})
export class Scenario5moduleModule { }
