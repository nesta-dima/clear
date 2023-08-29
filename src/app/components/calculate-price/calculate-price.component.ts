import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { GeneralCleanComponent } from './typesClean/general-clean/general-clean.component';
import { DialogData } from './calculate-price.interface';
import { MaintenanceCleanComponent } from './typesClean/maintenance-clean/maintenance-clean.component';

@Component({
	selector: 'app-calculate-price',
	templateUrl: './calculate-price.component.html',
	styleUrls: ['./calculate-price.component.scss'],
})
export class CalculatePriceComponent {
	typesClean = [
		{
			title: 'поддерживающая уборка',
			subTitle: 'Тип удаляемых загрязнений: легкие, средние',
			component: GeneralCleanComponent,
		},
		{
			title: 'генеральная уборка',
			subTitle: 'Тип удаляемых загрязнений: легкие, средние',
			component: GeneralCleanComponent,
		},
		{
			title: 'поддерживающая уборка',
			subTitle: 'Тип удаляемых загрязнений: легкие, средние',
			component: GeneralCleanComponent,
		},
		{
			title: 'поддерживающая уборка',
			subTitle: 'Тип удаляемых загрязнений: легкие, средние',
			component: GeneralCleanComponent,
		},
		{
			title: 'поддерживающая уборка',
			subTitle: 'Тип удаляемых загрязнений: легкие, средние',
			component: GeneralCleanComponent,
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
		console.log('item.title', item);
		if (item.title === 'поддерживающая уборка') {
			const dialogRef = this.dialog.open(MaintenanceCleanComponent, {
				width: '90%',
			});
		}
		if (item.title === 'генеральная уборка') {
			const dialogRef = this.dialog.open(GeneralCleanComponent, {
				width: '90%',
			});
		}
	}
}
