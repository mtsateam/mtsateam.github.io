import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { SponsorWeekComponent } from './sponsor-week/sponsor-week.component';
import { WelcomePageComponent } from './welcome-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IntroComponent, UpcomingEventComponent, SponsorWeekComponent, WelcomePageComponent]
})
export class WelcomePageModule { }
