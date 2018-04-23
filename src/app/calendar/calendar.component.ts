import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

//
// import {Component, ViewChild, AfterViewInit} from '@angular/core';
// // import {DayPilot, DayPilotCalendarComponent} from 'daypilot-pro-angular';
// import {DataService} from './data.service'; { }
//
// @Component({
//   selector: 'app-calendar',
//   template: `<daypilot-calendar [config]="config" [events]="events" #calendar></daypilot-calendar>`,
//   styles: [``]
// })
// export class CalendarComponent implements AfterViewInit {
//
//   @ViewChild('calendar')
//   calendar: DayPilotCalendarComponent;
//
//   events: any[] = [];
//
//   config: any = {
//     days: 7,
//     startDate: DayPilot.Date.today().firstDayOfWeek(),
//     timeRangeSelectedHandling: 'Disabled',
//     eventDeleteHandling: 'Disabled',
//   };
//
//   constructor(private ds: DataService) {
//   }
//
//   ngAfterViewInit(): void {
//     const from = this.calendar.control.visibleStart();
//     const to = this.calendar.control.visibleEnd();
//     this.ds.getEvents(from, to).subscribe(result => {
//       this.events = result;
//     });
//   }
//
// }
