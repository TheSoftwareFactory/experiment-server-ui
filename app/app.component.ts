import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ExperimentService } from './experiment.service';

@Component({
  selector: 'app',
  template: `<h1>Experiment server</h1>
  <nav>
  	<a [routerLink]="['/experiments']">Experiments</a>
  	<a [routerLink]="['/users']">Users</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
  	ExperimentService
  ]

})
export class AppComponent { }