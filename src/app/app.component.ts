import { Component } from '@angular/core';

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
      class="app dark"
      #app>
      <app-navbar (themeChanged)="setTheme($event)"></app-navbar>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  theme: string = 'light' || 'dark';
  setTheme(theme: string) {
    this.theme = theme;
  }
}
