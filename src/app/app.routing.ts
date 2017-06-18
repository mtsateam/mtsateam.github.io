import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from "./event/event.component";
import { ExecComponent } from "./exec/exec.component";


const ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', redirectTo: '/exec', pathMatch: 'full' },
  { path: 'event', component: EventComponent },
  { path: 'exec', component: ExecComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(ROUTES);
