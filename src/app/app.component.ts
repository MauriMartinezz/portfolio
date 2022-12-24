import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('app') myApp!: ElementRef;
  title = 'portfolio';

  constructor(private renderer2: Renderer2) {}
  setTheme(theme: string) {
    const app = this.myApp.nativeElement;

    if (theme == 'ligth') {
      this.renderer2.removeClass(app, 'ligth');
      this.renderer2.addClass(app, 'dark');
    } else {
      this.renderer2.removeClass(app, 'dark');
      this.renderer2.addClass(app, 'ligth');
    }
  }
}
