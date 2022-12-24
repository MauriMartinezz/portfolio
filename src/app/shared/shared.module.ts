import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FooterComponent, NavbarComponent]
})
export class SharedModule {}
