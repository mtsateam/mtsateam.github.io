import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { ExecComponent } from './exec/exec.component';
import { EventComponent } from './event/event.component';
import { CONST_ROUTING } from './app.routing';

//to prevent error 404
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ExecService } from './exec.service';
//
// const ROUTES = [
//   { path: '', redirectTo: 'execs', pathMatch: 'full'},
//   { path: 'execs', component: ExecComponent }
// ]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExecComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    CONST_ROUTING,
    FormsModule,
    HttpModule
  ],
  providers: [
    ExecService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
