import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() imgPath: string = '';
  @Input() title = ''; 
  @Input() description = ''; 
  @Input() url: string = '';
}
