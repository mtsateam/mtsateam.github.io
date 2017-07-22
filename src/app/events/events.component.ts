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
  thumbnailEventList: any;


  constructor(public eventsService: EventsService) { }

  ngOnInit() {
    this.getEventsList()
    this.getUpcomingEvent()
    this.getThumbnailEvent();
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

  getThumbnailEvent(){
    this.eventsService.getThumbnailEventList().then((res) => {
      this.thumbnailEventList = res;
    })
  }

  updateModalEvent(event){
    document.getElementById("event-title").innerHTML=event.Name;
    document.getElementById("event-description").innerHTML=event.Description;
    document.getElementById("event-date").innerHTML=event.EventDate;
    document.getElementById("event-time").innerHTML=event.EventTime;
    document.getElementById("event-location").innerHTML=event.Location;
    document.getElementById("event-URL").setAttribute('href', event.EventURL);
  }

}
