import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateService } from './translate.service';

export function loadTranslations(translateService: TranslateService) {
  return () => translateService.loadTranslations('assets/i18n/fr.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadTranslations, deps: [TranslateService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
