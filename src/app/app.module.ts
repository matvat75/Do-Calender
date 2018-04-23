import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {HttpClient, HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlusComponent } from './plus/plus.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
import {CalendarModule} from './calendar/calendar.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlusComponent
  ],
  imports: [
    BrowserModule,
     BrowserModule , AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    // HttpClient,
    // HttpClientModule
    // RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




