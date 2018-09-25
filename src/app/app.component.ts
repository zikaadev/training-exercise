import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  param = { value: 'world' };
  language: string;

  constructor(
    private translateService: TranslateService, ) {
    translateService.addLangs(['en', 'de', 'sp']);
    // translateService.use('sp');
  }

  ngOnInit(): void {
    localStorage.clear();
    this.language = this.getLanguage();
    if (!this.language) {
      this.setLanguage('sp');
    }
  }

  getLanguage() {
    this.language = localStorage.getItem(('language'));
    console.log(localStorage.getItem('language'));
    console.log('language: ' + this.language);
    return this.language;
  }

  setLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.language = this.getLanguage();
    this.translateService.use(localStorage.getItem('language'));
    // this.translateService.use(this.language);
  }
}
