import { Component, OnInit } from '@angular/core'
import { EventsComponent } from "../events/events.component"
import { EventsService } from "../events/events.service"
import { SponsorsService } from "../sponsors/sponsors.service"

@Component({
  selector: 'app-news-banner',
  templateUrl: './news-banner.component.html',
  styleUrls: ['./news-banner.component.css']
})
export class NewsBannerComponent implements OnInit {
  upcomingEvents: any;
  sponsorOfTheWeek: any;

  constructor(public eventsService: EventsService, public sponsorsService: SponsorsService) { }

  ngOnInit() {
    this.getUpcomingEvents()
    this.getSponsorOfTheWeek()
  }

  getUpcomingEvents(){
    this.eventsService.getUpcomingEvent().then((res) => {
      this.upcomingEvents=res;
    })
  }

  getSponsorOfTheWeek(){
    this.sponsorsService.getSponsorOfTheWeek().then((res) => {
      this.sponsorOfTheWeek = res;
    })
  }

}
