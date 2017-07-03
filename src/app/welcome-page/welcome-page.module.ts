import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { SponsorWeekComponent } from './sponsor-week/sponsor-week.component';
import { WelcomePageComponent } from './welcome-page.component';
import { CONST_ROUTING } from './welcome-page.routing';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
  ],
  declarations: [IntroComponent, UpcomingEventComponent, SponsorWeekComponent, WelcomePageComponent]
})
export class WelcomePageModule { }

