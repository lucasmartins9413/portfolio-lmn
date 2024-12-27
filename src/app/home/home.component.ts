import { Component } from '@angular/core';
import { TagSingleComponent } from '../components/tag-single/tag-single.component';

@Component({
  selector: 'app-home',
  imports: [TagSingleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
