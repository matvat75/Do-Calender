import {NgModule} from '@angular/core';
import {PlusComponent} from './plus/plus.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {CalendarComponent} from './calendar/calendar.component';
import {DoComponent} from './do/do.component';
import {DoerComponent} from './doer/doer.component';
import {IdeaComponent} from './idea/idea.component';
// first step for create routing in declare an app
const appRoutes: Routes = [
  {path: '' , redirectTo: '/dashboard'  , pathMatch : 'full'},
  {path : 'dashboard' , component: MenuComponent},
  {path: 'plus' , component: PlusComponent},
  {path: 'calendar' , component: CalendarComponent},
  {path: 'do' , component : DoComponent},
  {path: 'doer' , component: DoerComponent},
  {path: 'idea' , component: IdeaComponent},
];
// second step routing imports and next export
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule {
}
