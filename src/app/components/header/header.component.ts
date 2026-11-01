import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { DarkLightToggleComponent } from '../dark-light-toggle/dark-light-toggle.component';

@Component({
  selector: 'app-header',
  imports: [DarkLightToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly i18n = inject(LanguageService);

}
