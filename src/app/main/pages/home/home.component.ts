import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-intro></app-intro>
    <app-services></app-services>
    <app-skills></app-skills>
    <app-about></app-about>
    <app-scroll-to-top></app-scroll-to-top>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
