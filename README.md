# Recapcha

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Site Key

Set your google site key in `app.module.ts` file. 

```

providers: [
    ReCaptchaV3Service,
      { provide: RECAPTCHA_V3_SITE_KEY, useValue: 'your_site_key' }
    ],
```


## Further help

To get more help on google recaptcha integration [ng-recaptcha reference](https://www.npmjs.com/package/ng-recaptcha) page.
