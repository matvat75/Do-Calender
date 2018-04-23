import { BrowserModule } from '@angular/platform-browser';
// import {AppRoutingModule} from './app-routing.module';
import { NgModule } from '@angular/core';
// import { RouterOutlet } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlusComponent } from './plus/plus.component';
import { CalendarComponent } from './calendar/calendar.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFontAwesomeModule} from 'angular-font-awesome';




const appRoutes: Routes = [
  {path: 'dashboard' , component : MenuComponent},
  {path: 'plus', component: PlusComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlusComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
     BrowserModule , AngularFontAwesomeModule,
    // AppRoutingModule
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
