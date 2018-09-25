import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../core/services/helper.service';
import { Product } from '../../core/models/product';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  param = { value: 'world' };
  constructor(
    private helperService: HelperService,
    private translateService: TranslateService) {
    this.products = this.helperService.getProduct();
  }

  // pageTitle = 'Check out our Products';
  products: Product[];


  ngOnInit() {
  }

}
