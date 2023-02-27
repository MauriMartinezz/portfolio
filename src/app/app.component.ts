import { Component } from '@angular/core';
import { theme } from './shared/models/themes.interface';

// <div
//   class="app dark"
//   #app>
//   <app-navbar (themeChanged)="setTheme($event)"></app-navbar>
//   <router-outlet></router-outlet>
// </div>
@Component({
  selector: 'app-root',
  template: `
    <div
      class="app"
      [ngClass]="theme"
      #app>
      <app-navbar (themeChanged)="setTheme($event)"></app-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  theme: theme = 'light' || 'dark';
  setTheme(theme: theme) {
    this.theme = theme;
    console.log(this.theme);
  }
}
