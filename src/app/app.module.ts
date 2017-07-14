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


//components
import { MenuComponent } from './menu.component'
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ExecsComponent } from './execs/execs.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';



//services
import { ExecsService } from './execs/execs.service';
import { AboutUsService } from './about-us/about-us.service';
import { EventsService } from './events/events.service';
import { SponsorsService } from './sponsors/sponsors.service';
import { WelcomePageService } from './welcome-page/welcome-page.service';



//to prevent error 404
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CONST_ROUTING } from './app.routing';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    CONST_ROUTING,
  ],
  declarations: [
    MenuComponent,
    AppComponent,
    EventsComponent,
    AboutUsComponent,
    ExecsComponent,
    SponsorsComponent,
    WelcomePageComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  providers: [
    ExecsService,
    AboutUsService,
    EventsService,
    SponsorsService,
    WelcomePageService,

    {
      provide: LocationStrategy, useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
