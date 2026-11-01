import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { LANGS, Lang, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly langs = LANGS;
  readonly lang = signal<Lang>(this.initialLang());
  readonly t = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.doc.documentElement.lang = LANGS.find(l => l.code === lang)!.html;
      this.title.setTitle(TRANSLATIONS[lang].meta.title);
    });
  }

  set(lang: Lang) {
    this.lang.set(lang);
    if (this.isBrowser) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage unavailable */ }
    }
  }

  private initialLang(): Lang {
    if (!this.isBrowser) return 'pt';
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && saved in TRANSLATIONS) return saved;
    } catch { /* storage unavailable */ }
    const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
    return nav === 'en' || nav === 'es' ? nav : 'pt';
  }
}
