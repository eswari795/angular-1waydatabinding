import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { Scenario1componentComponent } from './scenario1/scenario1component/scenario1component.component';
import {Scenario1Module} from './scenario1module/scenario1.module'
import { Scenario1componentComponent } from './scenario1module/scenario1component/scenario1component.component';
@NgModule({
  declarations: [
    AppComponent,
    Scenario1componentComponent
   
  ],
  imports: [
    BrowserModule,
    Scenario1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
