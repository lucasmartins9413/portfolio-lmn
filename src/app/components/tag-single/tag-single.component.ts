import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-single',
  templateUrl: './tag-single.component.html',
  styleUrls: ['./tag-single.component.css'],
})
export class TagSingleComponent {
  @Input() iconPath: string = '';
  @Input() text = '';
  /** '20' renders a square icon; anything else keeps the image's own aspect ratio (wide logos). */
  @Input() width: string = '20';
}
