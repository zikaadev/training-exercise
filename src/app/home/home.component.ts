import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  st: any = this.translateService.get('home.title');

  constructor(private translateService: TranslateService, ) {
    translateService.addLangs(['en', 'de', 'sp']);
    translateService.setDefaultLang('en');

    // let browserLang = translateService.getBrowserLang();
    // translateService.use(browserLang.match(/en|de|sp/) ? browserLang : 'en');
    translateService.use('de');
  }

  ngOnInit() {
  }

}
