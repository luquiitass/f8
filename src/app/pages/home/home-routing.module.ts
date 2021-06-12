import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
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
