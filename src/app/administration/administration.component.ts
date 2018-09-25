import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  param = { value: 'world' };
  constructor(private translateService: TranslateService) { }

  // pageTitle = 'Administration page';

  ngOnInit() {
  }

}
