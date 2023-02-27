import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../models/themes.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() themeChanged = new EventEmitter<theme>();
  public faMoon = faMoon;
  public faSun = faSun;
  public theme: theme = 'light';
  public navbarFixed = false;

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.themeChanged.emit(this.theme);
  }
  @HostListener('document:scroll')
  scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      this.navbarFixed = true;
    } else {
      this.navbarFixed = false;
    }
  }
}
