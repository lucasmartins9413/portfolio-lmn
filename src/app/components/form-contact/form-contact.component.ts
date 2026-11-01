import { Component, inject } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {
  readonly i18n = inject(LanguageService);
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/)]],
      company: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const form = document.getElementById('contactForm') as HTMLFormElement;
      form.submit();
    } else {
      console.error('Formulário inválido');
    }
  }
}
