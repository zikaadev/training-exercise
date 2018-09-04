import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'product', pathMatch: 'full' },
        { path: '**', redirectTo: 'product', pathMatch: 'full' }
    ])],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
