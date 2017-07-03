import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsComponent } from './events.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventsDetailsComponent, EventsComponent]
})
export class EventsModule { }
