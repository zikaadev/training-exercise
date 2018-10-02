import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  param = { value: 'world' };
  language: string;

  constructor(
    private translateService: TranslateService,
    private media: ObservableMedia) {
    translateService.addLangs(['en', 'de', 'sp']);
  }

  ngOnInit(): void {
    // Automatically close side menu on screens > sm breakpoint
    this.media.asObservable()
      .pipe(filter((change: MediaChange) => (change.mqAlias !== 'xs' && change.mqAlias !== 'sm')))
      .subscribe(() => this.sidenav.close());
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

