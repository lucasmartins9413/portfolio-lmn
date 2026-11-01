import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() imgPath: string = '';
  @Input() title = '';
  @Input() description = '';
  @Input() url: string = '';
  @Input() linkLabel: string = 'Ver projeto';
  /** Background of the logo panel, usually the product's own brand color. */
  @Input() panel: string = '';
  /** Max width of the logo inside the panel, e.g. '220px'. */
  @Input() logoWidth: string = '180px';
  /** Rounded app-icon style for square logos. */
  @Input() icon: boolean = false;
  /** Logo panel beside the content instead of above it. */
  @Input() wide: boolean = false;
  @Input() status: string = '';
  @Input() tags: string[] = [];
  @Input() code: string = '';
  @Input() note: string = '';
  @Input() privateLabel: string = 'Repositório privado';
  @Input() tagsLabel: string = 'Tecnologias';
}
