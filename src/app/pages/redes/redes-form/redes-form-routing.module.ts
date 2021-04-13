import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedesFormPage } from './redes-form.page';

const routes: Routes = [
  {
    path: '',
    component: RedesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedesFormPageRoutingModule {}
