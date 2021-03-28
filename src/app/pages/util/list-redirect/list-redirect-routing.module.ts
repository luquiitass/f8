import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRedirectPage } from './list-redirect.page';

const routes: Routes = [
  {
    path: '',
    component: ListRedirectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRedirectPageRoutingModule {}
