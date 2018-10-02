import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  param = { value: 'world' };
  language: string;

  constructor(
    private translateService: TranslateService, ) {
    translateService.addLangs(['en', 'de', 'sp']);
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
    return this.language;
  }

  setLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.language = this.getLanguage();
    this.translateService.use(localStorage.getItem('language'));
  }
}
