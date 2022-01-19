import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonAuthGuard } from './guards/commonauth.guard';
import { BlankComponent } from './layouts/blank/blank.component';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/authentication', pathMatch: 'full' },
      //{ path: 'dashboard', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [CommonAuthGuard],
      },
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule),
        canActivate: [CommonAuthGuard],
      },
      {
        path: 'sequence',
        loadChildren: () => import('./sequence/sequence.module').then(m => m.SequenceModule),
        canActivate: [CommonAuthGuard],
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
 {
		path: '',
		component: BlankComponent,
		children: [
			{
				path: 'authentication',
				loadChildren:
					() => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: '/authentication/404'
	}
];
