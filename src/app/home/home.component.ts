import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TagSingleComponent } from '../components/tag-single/tag-single.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { FormContactComponent } from '../components/form-contact/form-contact.component';
import { LanguageService } from '../i18n/language.service';

/** Visual settings of a card; its texts come from translations.ts, matched by position. */
interface CardVisual {
  img: string;
  url: string;
  linkLabel?: string;
  panel?: string;
  logoWidth?: string;
  icon?: boolean;
  wide?: boolean;
  code?: string;
}

@Component({
  selector: 'app-home',
  imports: [NgTemplateOutlet, TagSingleComponent, ProjectCardComponent, FormContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly i18n = inject(LanguageService);

  readonly products = [
    { name: 'Correta Fácil', url: 'https://corretafacil.com.br' },
    { name: 'Raiz Kids', url: 'https://raizkids.com.br' },
    { name: 'Flags', url: 'https://apps.shopify.com/flags-product-badges' },
  ];

  readonly stack = [
    ['php-icon.svg', 'PHP'], ['laravel-icon.png', 'Laravel'], ['js-icon.svg', 'JavaScript'],
    ['react-icon.svg', 'React'], ['nextjs-icon.svg', 'Next.js'], ['html-icon.svg', 'HTML'],
    ['css-icon.svg', 'CSS'], ['wordpress-icon.svg', 'WordPress'], ['docker-icon.svg', 'Docker'],
    ['github-icon.svg', 'GitHub'], ['figma-icon.svg', 'Figma'],
  ];

  readonly projects: CardVisual[] = [
    { img: 'assets/raizkids-logo.svg', panel: '#FBF3E8', logoWidth: '260px', url: 'https://raizkids.com.br', linkLabel: 'raizkids.com.br' },
    { img: 'assets/corretafacil-logo.png', panel: '#16181D', logoWidth: '220px', url: 'https://corretafacil.com.br', linkLabel: 'corretafacil.com.br' },
  ];

  readonly clients: CardVisual[] = [
    {
      img: 'assets/vm-logo.png', panel: 'linear-gradient(150deg, #00515F 0%, #003A45 100%)', logoWidth: '200px',
      wide: true, url: 'https://vminvestimentoimobiliario.com.br', linkLabel: 'vminvestimentoimobiliario.com.br',
    },
  ];

  readonly shopify: CardVisual[] = [
    {
      img: 'assets/flags-icon.png', icon: true, wide: true,
      panel: 'linear-gradient(140deg, #FFE9D6 0%, #FFD1C4 100%)',
      url: 'https://apps.shopify.com/flags-product-badges',
    },
    {
      img: 'assets/shopify-academy.svg', logoWidth: '100%',
      panel: 'linear-gradient(150deg, #5E8E3E 0%, #2F5A1F 100%)',
      url: 'https://github.com/lucasmartins9413/shopify-skills',
      code: 'npx skills add lucasmartins9413/shopify-skills --skill learn',
    },
    {
      img: 'assets/alpha-theme.svg', logoWidth: '100%',
      panel: 'linear-gradient(150deg, #E4EFD3 0%, #C7DDA6 100%)',
      url: 'https://alpha-theme-9opgdy06.myshopify.com/',
    },
  ];
}
