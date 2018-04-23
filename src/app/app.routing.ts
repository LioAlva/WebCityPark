import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { AuthService } from './authservice';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        canActivate:[AuthService],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        //canActivateChild:[AuthService],
        //canLoad:[AuthService],
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
