import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../core/services/helper.service';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private helperService: HelperService) {
    this.products = this.helperService.getProduct();
  }

  pageTitle = 'Check out our Products';
  products: Product[];


  ngOnInit() {
  }

}
