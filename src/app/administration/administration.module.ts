import { NgModule } from '@angular/core';
import { AdministrationRoutingModule } from './administration-routing.module';
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    // RouterModule.forChild([
    //   { path: 'administration', component: AdministrationComponent}
    // ]),
    SharedModule,
    AdministrationRoutingModule,
    TranslateModule
  ],
  declarations: [AdministrationComponent],
  providers: [],
  exports: []
})
export class AdministrationModule { }
