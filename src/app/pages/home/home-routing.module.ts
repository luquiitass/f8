import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';

import { HomePage } from './home.page';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate : [AuthGuard],
    children : [
      {
        path: 'teams',
        loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
      },
      {
        path: 'results',
        loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
      },
      {
        path: 'games',
        loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
      },
      {
        path: 'players',
        loadChildren: () => import('./players/players.module').then( m => m.PlayersPageModule)
      },
      {
        path: 'publications',
        loadChildren: () => import('./publications/publications.module').then( m => m.PublicationsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/results',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'publications',
    loadChildren: () => import('./publications/publications.module').then( m => m.PublicationsPageModule)
  },
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
