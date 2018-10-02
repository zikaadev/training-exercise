import { NgModule } from '@angular/core';
import { AdministrationRoutingModule } from './administration-routing.module';
import { RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { SharedModule } from '../core/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { extract } from '@app/core';

@NgModule({
  imports: [
    SharedModule,
    AdministrationRoutingModule,
    TranslateModule
  ],
  declarations: [AdministrationComponent],
  providers: [],
  exports: [CoreModule]
})
export class AdministrationModule { }
