import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full' },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/team/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'team/:team_id/players',
    loadChildren: () => import('./pages/player/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/team/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'admin_home',
    loadChildren: () => import('./pages/admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'positions',
    loadChildren: () => import('./pages/position/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'position-form',
    loadChildren: () => import('./pages/position/position-form/position-form.module').then( m => m.PositionFormPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/event/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'event-form',
    loadChildren: () => import('./pages/event/event-form/event-form.module').then( m => m.EventFormPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./pages/game/list/list.module').then( m => m.ListPageModule)
  },
  
  {
    path: 'game-form',
    loadChildren: () => import('./pages/game/game-form/game-form.module').then( m => m.GameFormPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/player/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'player-form',
    loadChildren: () => import('./pages/player/player-form/player-form.module').then( m => m.PlayerFormPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'users/:id/profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./pages/user/user-form/user-form.module').then( m => m.UserFormPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'team/profile/:id',
    loadChildren: () => import('./pages/team/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'results/profile/:id',
    loadChildren: () => import('./pages/game/result/result.module').then( m => m.ResultPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'games/profile/:id',
    loadChildren: () => import('./pages/game/game/game.module').then( m => m.GamePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'crop',
    loadChildren: () => import('./pages/crop/crop.module').then( m => m.CropPageModule)
  },
  {
    path: 'typesEvent',
    loadChildren: () => import('./pages/typeEvent/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'type-event-form',
    loadChildren: () => import('./pages/typeEvent/type-event-form/type-event-form.module').then( m => m.TypeEventFormPageModule)
  },
  {
    path: 'admin/game/:id',
    loadChildren: () => import('./pages/game/admin-game/admin-game.module').then( m => m.AdminGamePageModule)
  },
  {
    path: 'list-redirect',
    loadChildren: () => import('./pages/util/list-redirect/list-redirect.module').then( m => m.ListRedirectPageModule)
  },
  {
    path: 'player/profile/:id',
    loadChildren: () => import('./pages/player/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/user/my-profile/my-profile.module').then( m => m.MyProfilePageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'redes-form',
    loadChildren: () => import('./pages/redes/redes-form/redes-form.module').then( m => m.RedesFormPageModule)
  },
  {
    path: 'player-search',
    loadChildren: () => import('./pages/player/player-search/player-search.module').then( m => m.PlayerSearchPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notification/list/list.module').then( m => m.ListPageModule),    
    canActivate : [AuthGuard],

  },
  {
    path: 'form-publication',
    loadChildren: () => import('./pages/publications/form-publication/form-publication.module').then( m => m.FormPublicationPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'publication/:id/:segment/:not',
    loadChildren: () => import('./pages/publications/publication/publication.module').then( m => m.PublicationPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'publication/:id/:segment',
    loadChildren: () => import('./pages/publications/publication/publication.module').then( m => m.PublicationPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'publication/:id',
    loadChildren: () => import('./pages/publications/publication/publication.module').then( m => m.PublicationPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'errors',
    loadChildren: () => import('./pages/error/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'team-request/:team_id/:player_id',
    loadChildren: () => import('./pages/passRequest/team-request/team-request.module').then( m => m.TeamRequestPageModule)
  },
  {
    path: 'team-request-to-player/:id',
    loadChildren: () => import('./pages/passRequest/team-request-to-player/team-request-to-player.module').then( m => m.TeamRequestToPlayerPageModule)
  },
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
