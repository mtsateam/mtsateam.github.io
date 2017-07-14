import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  allEvents: any;
  upcomingEvent: any;
  eventByID: any;


  constructor(public eventsService: EventsService) { }

  ngOnInit() {
    this.getEventsList()
    this.getUpcomingEvent()
  }

  getEventsList(){
    this.eventsService.getAllEvents().then((res) => {
      this.allEvents = res;
    })
  }

  getEventByID(id){
    this.eventsService.getEventByID(id).then((res) => {
      this.eventByID = res;
    })
  }

  getUpcomingEvent(){
    this.eventsService.getUpcomingEvent().then((res) => {
      this.upcomingEvent = res;
    })
  }

}
