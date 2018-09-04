import { NgModule } from '@angular/core';
import { AdministrationRoutingModule } from './administration-routing.module';
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    // RouterModule.forChild([
    //   { path: 'administration', component: AdministrationComponent}
    // ]),
    SharedModule,
    AdministrationRoutingModule
  ],
  declarations: [AdministrationComponent],
  providers: [],
  exports: []
})
export class AdministrationModule { }
