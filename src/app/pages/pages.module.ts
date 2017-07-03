import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

//Execs
import { ExecsComponent } from './execs/execs.component';


//to prevent error 404
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//children module import
import { AboutUsModule } from './about-us/about-us.module';
import { EventsModule } from './events/events.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { WelcomePageModule } from './welcome-page/welcome-page.module';

//Routing
import { CONST_ROUTING } from './pages.routing';


@NgModule({
  declarations: [
    ExecsComponent,
  ],
  imports: [
    CONST_ROUTING,
    BrowserModule,
    FormsModule,
    HttpModule,
    AboutUsModule,
    EventsModule,
    SponsorsModule,
    WelcomePageModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],

})
export class AppModule { }
