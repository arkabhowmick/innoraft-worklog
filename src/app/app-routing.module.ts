import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLogComponent } from './auto-log/auto-log.component';
import { ManualLogComponent } from './manual-log/manual-log.component';

const routes:Routes = [
    { path : 'manual-log', component : ManualLogComponent},
    { path : 'auto-log', component : AutoLogComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}