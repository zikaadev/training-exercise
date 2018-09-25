import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdministrationModule } from './administration/administration.module';
import { ProductsModule } from './products/products.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeModule } from './home/home.module';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    ProductsModule,
    AdministrationModule,
    HomeModule,
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
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  exports: [TranslateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
