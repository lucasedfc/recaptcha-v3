import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
@Component({
  selector: 'app-root',
  template: `
    <button (click)="executeImportantAction()">Important action</button>
  `,
})
export class AppComponent {
  title = 'recapcha';

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
  ) {
  }

  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => {
        console.log(token);

      })
  }
}
