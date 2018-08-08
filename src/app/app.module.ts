import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Scenario1Module} from './scenario1module/scenario1.module'
import { Scenario2Module } from './scenario2module/scenario2module.module';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   Scenario1Module,
    Scenario2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
