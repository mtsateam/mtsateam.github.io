import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './welcome-page.component';

const ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', component: WelcomePageComponent },

];
export const CONST_ROUTING = RouterModule.forRoot(ROUTES);
