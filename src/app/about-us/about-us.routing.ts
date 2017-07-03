import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';

const ROUTES: Routes = [
  // //full : makes sure the path is absolute path
  // { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  // { path: 'about-us', component: AboutUsComponent},

];
export const CONST_ROUTING = RouterModule.forRoot(ROUTES);
