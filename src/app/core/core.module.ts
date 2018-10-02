import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './services/helper.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule],
    declarations: [
        ShellComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [],
    providers: [HelperService]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }

}
