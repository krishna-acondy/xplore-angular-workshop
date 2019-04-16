import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private translations: any;
  constructor() { }

  loadTranslations(filePath) {
    return fetch(filePath)
      .then(response => response.json())
      .then(translations => this.translations = translations);
  }

  getTranslations() {
    return this.translations;
  }
}
