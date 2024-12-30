import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dark-light-toggle',
  imports: [CommonModule],
  templateUrl: './dark-light-toggle.component.html',
  styleUrl: './dark-light-toggle.component.css'
})
export class DarkLightToggleComponent implements OnInit {
  theme: string = 'dark-theme'; // Tema padrão inicial

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      // Obtém o tema do localStorage ou usa o padrão inicial
      const savedTheme = localStorage.getItem('theme') || 'dark-theme';
      this.theme = savedTheme;
      document.body.classList.add(this.theme);
    }
  }

  toggleTheme() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const currentTheme = this.theme;
      const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';

      // Alterna a classe no body
      document.body.classList.remove(currentTheme);
      document.body.classList.add(newTheme);

      // Atualiza o estado e salva no localStorage
      this.theme = newTheme;
      localStorage.setItem('theme', newTheme);
    }
  }

  get isDarkMode(): boolean {
    return this.theme === 'dark-theme';
  }
}
