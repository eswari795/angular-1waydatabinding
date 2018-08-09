import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Scenario1Module} from './scenario1module/scenario1.module'
import { Scenario2Module } from './scenario2module/scenario2module.module';

import { Scenario3moduleModule } from './scenario3module/scenario3module.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    
   Scenario1Module,
    Scenario2Module,
    Scenario3moduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
