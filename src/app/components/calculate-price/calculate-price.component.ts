import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GeneralCleanComponent } from './typesClean/general-clean/general-clean.component';
import { MaintenanceCleanComponent } from './typesClean/maintenance-clean/maintenance-clean.component';
import { DryCleanComponent } from './typesClean/dry-clean/dry-clean.component';
import { WindowCleanComponent } from './typesClean/window-clean/window-clean.component';
import { DifferentCleanComponent } from './typesClean/different-clean/different-clean.component';
import { FormService } from '../../services/form.service';

@Component({
	selector: 'app-calculate-price',
	templateUrl: './calculate-price.component.html',
	styleUrls: ['./calculate-price.component.scss'],
})
export class CalculatePriceComponent implements OnInit {
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

	generalValues = new FormControl('');
	maintenanceValues = new FormControl('');
	windowValues = new FormControl('');
	dryValues = new FormControl('');
	generalOptions: string[] = [
		'Погладить белье',
		'Дополнительные часы',
		'Дополнительный сан. узел',
		'Уборка гардероба',
		'Уборка в шкафу',
		'Чистка детской коляски',
		'Убрать лоток для животных',
		'помыть стены',
	];
	maintenanceOptions: string[] = [
		'Погладить белье',
		'Помыть холодильник',
		'Помыть духовку',
		'Помыть вытяжку',
		'Убрать в кухонных шкафчиках',
		'Дополнительные часы',
		'Помыть посуду',
		'Дополнительный сан. узел',
		'Уборка гардероба',
		'Уборка в шкафу',
		'Убрать на балконе',
		'Помыть шкафы на кухне',
		'Чистка детской коляски',
		'Убрать лоток для животных',
		'Помыть микроволновку',
		'помыть стены',
	];
	windowOptions: string[] = [
		'Помыть 1 окно (2 створки)',
		'Помыть 1 окно (3 створки)',
		'Балконная дверь и 1 окно (3 створки) ',
		'2 окна (4 створки)',
		'другое количество',
	];
	dryOptions: string[] = [
		'Двухместный диван',
		'Трехместный диван',
		'Угловой (4 места)',
		'Угловой (5-6 мест) ',
		'Угловой (7 мест)',
		'Односпальный матрас ',
		'Односпальный матрас (2 стороны)',
		'Двойной матрас',
		'Двуспальный матрас (2 стороны)',
		'Изголовье кровати',
		'Мягкое кресло',
		'Обычный стул',
		'Ковер, м.кв.',
		'Офисный стулx',
	];

	key1: any;
	key2: any;
	key3: any;

	typesCleanCheckBox = {
		clean1: false,
		clean2: false,
		clean3: false,
		clean4: false,
	};

	constructor(
		public dialog: MatDialog,
		public formService: FormService,
	) {}

	ngOnInit() {
		this.formService.square$.subscribe((square) => {
			this.selectedSquare = square;
		});
		this.formService.place$.subscribe((place) => {
			this.selectedPlace = place;
		});
	}

	openDialog(item: any): void {
		this.dialog.open(item.component, {
			width: '90%',
		});
	}

	selectedSquare = '';
	public onSquareChange(square: string) {
		this.formService.square$.next(square);
	}

	selectedPlace = '';
	public onPlaceChange(place: string) {
		this.formService.place$.next(place);
	}

	generalChange() {
		this.formService.generalValues$.next(this.generalValues.value);
	}
	maintenanceChange() {
		this.formService.maintenanceValues$.next(this.maintenanceValues.value);
	}
	windowChange() {
		this.formService.windowValues$.next(this.windowValues.value);
	}
	dryChange() {
		this.formService.dryValues$.next(this.dryValues.value);
	}

	changeTypesCleanCheckBox() {
		this.formService.typesCleanCheckBox$.next(this.typesCleanCheckBox);
	}

	handleKey1() {
		this.formService.key1$.next({ value: this.key1, title: 'Забрать ключи перед уборкой' });
	}
	handleKey2() {
		this.formService.key2$.next({ value: this.key2, title: 'Доставить ключи перед уборкой' });
	}
	handleKey3() {
		this.formService.key3$.next({ value: this.key3, title: 'Взять на уборку пылесос' });
	}
}
