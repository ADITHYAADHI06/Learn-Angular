import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { MessageDetailsComponent } from './message-details/message-details.component'  // form binding

@NgModule({
  // all components comes under this 
  declarations: [
    AppComponent,
    FormComponent,
    MessageDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // form binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
