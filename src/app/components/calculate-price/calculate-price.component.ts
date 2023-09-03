import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GeneralCleanComponent } from './typesClean/general-clean/general-clean.component';
import { MaintenanceCleanComponent } from './typesClean/maintenance-clean/maintenance-clean.component';
import { DryCleanComponent } from './typesClean/dry-clean/dry-clean.component';
import { WindowCleanComponent } from './typesClean/window-clean/window-clean.component';
import { DifferentCleanComponent } from './typesClean/different-clean/different-clean.component';

@Component({
	selector: 'app-calculate-price',
	templateUrl: './calculate-price.component.html',
	styleUrls: ['./calculate-price.component.scss'],
})
export class CalculatePriceComponent {
	typesClean = [
		{
			title: 'Поддерживающая уборка',
			component: MaintenanceCleanComponent,
		},
		{
			title: 'Генеральная уборка',
			component: GeneralCleanComponent,
		},
		{
			title: 'Химчистка',
			component: DryCleanComponent,
		},
		{
			title: 'Мойка окон',
			component: WindowCleanComponent,
		},
		{
			title: 'Oтличия генеральной уборки от поддерживающей',
			component: DifferentCleanComponent,
		},
	];
	flat: any;
	house: any;

	toppings = new FormControl('');
	toppings2 = new FormControl('');

	toppingList: string[] = [
		'Погладить белье',
		'Дополнительные часы',
		'Дополнительный сан. узел',
		'Уборка гардероба',
		'Уборка в шкафу',
		'Чистка детской коляски',
		'Убрать лоток для животных',
		'помыть стены',
	];
	toppingList2: string[] = [
		'Погладить белье',
		'Дополнительные часы',
		'Дополнительный сан. узел',
		'Уборка гардероба',
		'Уборка в шкафу',
		'Чистка детской коляски',
		'Убрать лоток для животных',
		'помыть стены',
	];
	key1: any;
	key2: any;
	key3: any;

	constructor(public dialog: MatDialog) {}
	openDialog(item: any): void {
		this.dialog.open(item.component, {
			width: '90%',
		});
	}
}
