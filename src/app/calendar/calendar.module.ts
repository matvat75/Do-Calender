
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CalendarComponent} from './calendar.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CalendarComponent
  ],
  exports:      [ CalendarComponent ],
  providers:    [ ]
})
export class CalendarModule { }
