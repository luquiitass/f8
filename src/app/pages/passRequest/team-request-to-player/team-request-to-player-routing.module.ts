import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamRequestToPlayerPage } from './team-request-to-player.page';

const routes: Routes = [
  {
    path: '',
    component: TeamRequestToPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRequestToPlayerPageRoutingModule {}
