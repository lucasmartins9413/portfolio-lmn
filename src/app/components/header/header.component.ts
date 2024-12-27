import { Component } from '@angular/core';
import { DarkLightToggleComponent } from '../dark-light-toggle/dark-light-toggle.component';

@Component({
  selector: 'app-header',
  imports: [DarkLightToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

}
