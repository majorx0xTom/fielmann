import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FielmannComponent } from './fielmann/fielmann.component';

const routes: Routes = [
  { path: 'fielmann', component: FielmannComponent },
  { path: '**', redirectTo: 'fielmann' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
