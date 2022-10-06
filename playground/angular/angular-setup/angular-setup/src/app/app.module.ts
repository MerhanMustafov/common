import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from './navigation/nav.component';
import {NavtwoComponent} from './navigationtwo/navtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
