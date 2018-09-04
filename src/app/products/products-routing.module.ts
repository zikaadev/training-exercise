import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'products', component: ProductsComponent }
    ])
],
    exports: [RouterModule],
    providers: []
})
export class ProductsRoutingModule { }
