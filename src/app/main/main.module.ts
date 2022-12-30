import { SkillsComponent } from './components/skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent],
  imports: [CommonModule, FontAwesomeModule, SkillsComponent]
})
export class MainModule {}
