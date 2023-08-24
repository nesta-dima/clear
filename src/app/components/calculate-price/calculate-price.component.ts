import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-calculate-price',
	templateUrl: './calculate-price.component.html',
	styleUrls: ['./calculate-price.component.scss'],
})
export class CalculatePriceComponent {
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
}
