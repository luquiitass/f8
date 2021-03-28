import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGamePage } from './admin-game.page';

import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: AdminGamePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AdminGamePageRoutingModule {}
