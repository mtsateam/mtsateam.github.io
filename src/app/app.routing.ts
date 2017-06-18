import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from "./event/event.component";
import { ExecComponent } from "./exec/exec.component";


const ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', redirectTo: 'execs', pathMatch: 'full' },
  { path: 'event', component: EventComponent },
  { path: 'execs', component: ExecComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(ROUTES);
