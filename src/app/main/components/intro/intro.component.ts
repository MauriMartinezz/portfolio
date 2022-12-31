import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  template: `
    <section
      class="intro text-5xl container"
      id="home">
      <div class="intro__text">
        <h2>Hey! I'm Mauricio Martinez</h2>
        <p>I'm a software developer based in Argentina.</p>
      </div>
      <div class="intro__social">
        <a
          href=""
          *ngFor="let icon of icons"
          class="social__icon">
          <fa-icon
            [icon]="icon.icon"
            [class]="icon.class"></fa-icon>
        </a>
      </div>
    </section>
  `,
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faMail = faEnvelope;
  faDownload = faFileArrowDown;

  icons: any[] = [
    { icon: this.faGithub, class: 'github' },
    { icon: this.faLinkedin, class: 'linkedin' },
    { icon: this.faMail, class: 'mail' },
    { icon: this.faDownload, class: 'download' }
  ];
}
