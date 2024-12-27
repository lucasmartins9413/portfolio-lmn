import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-tag-single',
  imports: [NgOptimizedImage],
  templateUrl: './tag-single.component.html',
  styleUrls: ['./tag-single.component.css'],
})
export class TagSingleComponent {
  @Input() iconPath: string = '';
  @Input() text = ''; 
  @Input() width: string = '25';
}
