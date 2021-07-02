import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamRequestPage } from './team-request.page';

const routes: Routes = [
  {
    path: '',
    component: TeamRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRequestPageRoutingModule {}
