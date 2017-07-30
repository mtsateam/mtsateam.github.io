import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from  '@angular/core';


import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ExecsComponent } from './execs/execs.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NewsBannerComponent } from './news-banner/news-banner.component';


const ROUTES: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'news-banner', component: NewsBannerComponent },
  { path: 'events', component: EventsComponent },
  { path: 'execs', component: ExecsComponent},
  { path: 'sponsors', component: SponsorsComponent },


];
export const CONST_ROUTING = RouterModule.forRoot(ROUTES, {useHash:true});
