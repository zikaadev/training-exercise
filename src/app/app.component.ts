import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // pageTitle = 'training-exercise';
  param = { value: 'world' };
  defaultLang = 'de';

  constructor(private translateService: TranslateService) {
    // translateService.setDefaultLang('en');
    translateService.addLangs(['en', 'de', 'sp']);
    // translateService.use('de');
  }

  setLanguage(language: string) {
    this.translateService.use(language);
    this.defaultLang = language.substring(0, 2).toLowerCase();
    console.log(this.defaultLang);
  }
}
