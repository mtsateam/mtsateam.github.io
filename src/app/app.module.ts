import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';

//children modules

// import { EventsModule } from './events/events.module';
// import { AboutUsModule } from './about-us/about-us.module';
// import { SponsorsModule } from './sponsors/sponsors.module';
// import { WelcomePageModule } from './welcome-page/welcome-page.module';
// import { ExecsModule } from './execs/execs.module';


import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ExecsComponent } from './execs/execs.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


//to prevent error 404
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CONST_ROUTING } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ExecsModule,
    // AboutUsModule,
    // EventsModule,
    // SponsorsModule,
    // WelcomePageModule,
    CONST_ROUTING,
  ],
  declarations: [
    AppComponent,
    EventsComponent,
    AboutUsComponent,
    ExecsComponent,
    SponsorsComponent,
    WelcomePageComponent,
    // CONST_ROUTING,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
