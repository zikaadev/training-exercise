import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdministrationModule } from './administration/administration.module';
import { ProductsModule } from './products/products.module';
import { HttpClientModule, HttpClient} from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    ProductsModule,
    AdministrationModule,
    CoreModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
