import { Component } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCompassDrafting } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  faCode = faCode;
  faCompass = faCompassDrafting;
  faAngular = faAngular;
}
