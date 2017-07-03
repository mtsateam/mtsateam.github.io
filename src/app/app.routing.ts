import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from  '@angular/core';


import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ExecsComponent } from './execs/execs.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const ROUTES: Routes = [
  //full : makes sure the path is absolute path
  // { path: '', redirectTo: 'welcome-page' , pathMatch: 'full'},
  // { path: 'welcome-page', loadChildren: './welcome-page/welcome-page.module#WelcomePageModule' },
  // { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
  // { path: 'events', loadChildren: './events/events.module#EventsModule' },
  // { path: 'execs', loadChildren: './execs/execs.module#ExecsModule' },
  // { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsModule' },


  { path: '', redirectTo: 'welcome-page' , pathMatch: 'full'},
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'execs', component: ExecsComponent},
  { path: 'sponsors', component: SponsorsComponent },


];
// export const CONST_ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
export const CONST_ROUTING = RouterModule.forRoot(ROUTES);
