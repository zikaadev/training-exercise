import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';
// import { ProductModalComponent } from './product-modal/product-modal.component';
import { Route } from '@app/core';
import { extract } from '@app/core';

const routes: Routes = [
    Route.withShell([
        { path: 'products', component: ProductsComponent }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ProductsRoutingModule { }
