import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {ExecsComponent} from './execs/execs.component';

const ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', component: WelcomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'events', component: EventsComponent},
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'execs', component: ExecsComponent},

];
export const CONST_ROUTING = RouterModule.forRoot(ROUTES);
