import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../core/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { FindByName } from '../core/shared/pipes/find-by-name.pipe';
import { extract } from '@app/core';

@NgModule({
  imports: [
    SharedModule,
    TranslateModule,
    ProductsRoutingModule,
    FormsModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    FindByName,
    // ProductModalComponent
  ],
  providers: [],
  exports: []
})
export class ProductsModule { }
