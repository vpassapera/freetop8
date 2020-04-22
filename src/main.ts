import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {ScriptService} from './app/layout/services/script.service';
import {sprintf} from 'sprintf-js';
import {detect} from 'detect-browser';

const browser = detect();

switch (browser && browser.name) {
  case 'chrome':
  case 'firefox':
  case 'opera':
  case 'edge':
  case 'safari':
    if (browser.name === 'edge') {
      alert('FreeTop8 might or might not work as expected on edge. For full support please use Firefox or chrome.');
    }

    // const scriptService = new ScriptService();
    // scriptService.load('sfRoutes').then(function () {
    //   if (environment.production) {
    //     enableProdMode();
    //   }
    //
    //   return platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
    // }).catch(function (error) {
    //   console.log('Error loading routes: ' + error);
    // });
    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
    break;

  default:
    alert(sprintf('Browser %s is not supported or could not be detected. Please use Firefox or Google Chrome.', browser.name));
}
