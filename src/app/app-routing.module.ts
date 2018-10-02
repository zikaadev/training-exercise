import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route, extract } from './core';

const routes: Routes = [
    Route.withShell([{ path: 'home', loadChildren: 'app/home/home.component' }]),
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: '**', redirectTo: 'product', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
