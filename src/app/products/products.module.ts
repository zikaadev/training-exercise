import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    TranslateModule,
    ProductsRoutingModule,
    FormsModule
    // RouterModule.forChild([
    //   { path: 'products', component: ProductsComponent}
    // ])
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  providers: [],
  exports: []
})
export class ProductsModule { }
