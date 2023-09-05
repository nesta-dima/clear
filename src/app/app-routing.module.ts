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
		path: '**',
		component: NotExistComponent,
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
