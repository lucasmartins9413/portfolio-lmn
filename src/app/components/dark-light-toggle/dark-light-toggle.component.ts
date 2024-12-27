import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dark-light-toggle',
  imports: [CommonModule],
  templateUrl: './dark-light-toggle.component.html',
  styleUrl: './dark-light-toggle.component.css'
})
export class DarkLightToggleComponent {
  toggleTheme(): void {
    const body = document.body;
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
      }
    }
  }
}
