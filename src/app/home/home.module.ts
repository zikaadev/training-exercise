import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../core/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';

@NgModule({
    imports: [
        // RouterModule.forChild([
        //     { path: 'home', component: HomeComponent }
        // ]),
        SharedModule,
        HomeRoutingModule,
        TranslateModule,
        CoreModule
    ],
    declarations: [HomeComponent],
    providers: [],
    exports: []
})
export class HomeModule { }
