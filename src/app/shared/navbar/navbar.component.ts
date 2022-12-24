import { Component, EventEmitter, Output } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() themeChanged = new EventEmitter<string>();
  public faMoon = faMoon;
  public faSun = faSun;

  public theme: string = 'ligth';

  changeTheme() {
    this.theme = this.theme == 'ligth' ? 'dark' : 'ligth';
    this.themeChanged.emit(this.theme);
  }
}
