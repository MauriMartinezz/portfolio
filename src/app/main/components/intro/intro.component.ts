import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronCircleDown,
  faEnvelope,
  faFileArrowDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  template: `
    <section
      class="intro text-5xl container"
      id="home">
      <div class="intro__text">
        <h2>Hey! I'm <span class="name">Mauricio Martinez</span></h2>
        <p>I'm a <b>software developer</b> based in Argentina.</p>
      </div>
      <div class="intro__social">
        <a
          [href]="icon.link"
          *ngFor="let icon of icons"
          class="social__icon"
          target="_blank">
          <fa-icon
            [icon]="icon.icon"
            [class]="icon.class"></fa-icon>
        </a>
      </div>
      <a
        href="#skills"
        class="icon__go-down">
        <fa-icon [icon]="faChevronDown"></fa-icon>
      </a>
    </section>
  `,
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faMail = faEnvelope;
  faDownload = faFileArrowDown;

  faChevronDown = faChevronCircleDown;

  icons: any[] = [
    {
      icon: this.faGithub,
      class: 'github',
      link: 'https://github.com/maurimartinezz'
    },
    {
      icon: this.faLinkedin,
      class: 'linkedin',
      link: 'https://www.linkedin.com/in/mauricio-julian-martinez/'
    },
    { icon: this.faMail, class: 'mail', link: '' },
    { icon: this.faDownload, class: 'download', link: '' }
  ];
}
