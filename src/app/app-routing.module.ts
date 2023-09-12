import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './page/root/root.component';
import { NotExistComponent } from './page/not-exist/not-exist.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: RootComponent,
	},
	{
		path: '404',
		component: NotExistComponent,
	},
	{
		path: '**',
		redirectTo: '404',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			anchorScrolling: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
