import { Component } from '@angular/core';
import { TagSingleComponent } from '../components/tag-single/tag-single.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  imports: [TagSingleComponent, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
