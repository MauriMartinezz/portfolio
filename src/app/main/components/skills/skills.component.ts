import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faAngular,
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faHtml5,
  faJs,
  faLinux,
  faNode,
  faSass,
  faSquareJs
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  faAngular = faAngular;
  faNode = faNode;
  faDocker = faDocker;
  faDb = faDatabase;
  faLinux = faLinux;
  faSass = faSass;
  faJs = faSquareJs;
  faGit = faGitAlt;
  faHtml = faHtml5;
  faBootstrap = faBootstrap;
  faCss = faCss3Alt;

  icons = [
    { icon: faHtml5, site: 'https://www.w3schools.com/html/' },
    { icon: this.faCss, site: 'https://www.w3schools.com/Css/' },
    { icon: faBootstrap, site: 'https://getbootstrap.com/' },
    { icon: faSass, site: 'https://sass-lang.com/' },
    { icon: faJs, site: 'https://www.w3schools.com/js/DEFAULT.asp' },
    { icon: faAngular, site: 'https://angular.io/' },
    { icon: faNode, site: 'https://nodejs.org/en/' },
    { icon: faDocker, site: 'https://www.docker.com/' },
    { icon: this.faDb, site: 'https://www.mysql.com/' },
    {
      icon: faLinux,
      site: 'https://www.redhat.com/en/topics/linux/what-is-linux'
    },
    { icon: this.faGit, site: 'https://git-scm.com/' }
  ];
}
