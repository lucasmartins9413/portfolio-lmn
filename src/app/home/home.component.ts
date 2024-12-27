import { Component } from '@angular/core';
import { TagSingleComponent } from '../components/tag-single/tag-single.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { FormContactComponent } from '../components/form-contact/form-contact.component';

@Component({
  selector: 'app-home',
  imports: [TagSingleComponent, ProjectCardComponent, FormContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
