import { NgModule } from '@angular/core';
import { HelperService } from './services/helper.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
    imports: [TranslateModule],
    declarations: [],
    providers: [HelperService]
})

export class CoreModule {

}
