import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service } from "ng-recaptcha";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ReCaptchaV3Service,
      { provide: RECAPTCHA_V3_SITE_KEY, useValue: 'your_site_key' }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
