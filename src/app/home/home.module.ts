import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        // RouterModule.forChild([
        //     { path: 'home', component: HomeComponent }
        // ]),
        SharedModule,
        HomeRoutingModule,
        TranslateModule
    ],
    declarations: [HomeComponent],
    providers: [],
    exports: []
})
export class HomeModule { }
