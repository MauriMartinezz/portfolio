import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  theme: string = 'light' || 'dark';
  setTheme(theme: string) {
    this.theme = theme;
  }
}
