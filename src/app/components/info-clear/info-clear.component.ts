import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { RequestCallComponent } from '../modal/request-call/request-call.component';
import { MatDialog } from '@angular/material/dialog';
// import emailjs from '@emailjs/browser';

const DEFAULT = {
	clear1: 'генеральная уборка',
	clear2: 'поддерживающая уборка',
	clear3: 'химчистка',
	clear4: 'мойка окон',
};

interface IAdditionKeys {
	value: boolean;
	title: string;
}

@Component({
	selector: 'app-info-clear',
	templateUrl: './info-clear.component.html',
	styleUrls: ['./info-clear.component.scss'],
})
export class InfoClearComponent implements OnInit {
	typesClean = [
		{ percent: '-20', title: 'раз в неделю' },
		{ percent: '-15', title: 'раз в две недели' },
		{ percent: '-10', title: 'раз в три недели' },
		{ percent: null, title: 'разовая уборка' },
	];

	isLoading = false;
	isSendRequest = false;

	square = '';
	place = '';
	generalOptions = [];
	maintenanceOptions = [];
	windowOptions = [];
	dryOptions = [];
	typesCleanCheckBox = {};

	key1 = {
		value: false,
		title: '',
	};
	key2 = {
		value: false,
		title: '',
	};
	key3 = {
		value: false,
		title: '',
	};

	typeClean = 'разовая уборка';

	orderForm = this.fb.group({
		firstName: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		phone: ['', [Validators.required]],
		message: [''],
	});
	get getTypesCleanCheckBox() {
		return Object.entries(this.typesCleanCheckBox)
			.filter(([, value]) => value)
			.map((el) => this.getNameTypeClean(el[0]))
			.join(', ');
	}
	constructor(
		private formService: FormService,
		public fb: FormBuilder,
		public dialog: MatDialog,
	) {}

	ngOnInit() {
		this.formService.square$.subscribe((square) => {
			this.square = square;
		});
		this.formService.place$.subscribe((place) => {
			this.place = place;
		});
		this.formService.generalValues$.subscribe((general) => {
			this.generalOptions = general;
		});
		this.formService.maintenanceValues$.subscribe((maintenance) => {
			this.maintenanceOptions = maintenance;
		});
		this.formService.windowValues$.subscribe((window) => {
			this.windowOptions = window;
		});
		this.formService.dryValues$.subscribe((dry) => {
			this.dryOptions = dry;
		});
		this.formService.typesCleanCheckBox$.subscribe((types) => {
			this.typesCleanCheckBox = types;
		});
		this.formService.key1$.subscribe((key1) => {
			this.key1 = key1;
		});
		this.formService.key2$.subscribe((key2) => {
			this.key2 = key2;
		});
		this.formService.key3$.subscribe((key3) => {
			this.key3 = key3;
		});
	}

	get getOptions() {
		return [...this.generalOptions, ...this.maintenanceOptions, ...this.windowOptions, ...this.dryOptions].join(', ');
	}

	isTouched = false;
	async sendOrder() {
		if (this.orderForm.valid) {
			const data = `Площадь - ${this.square} | Помещение -  ${this.place} | Периодичность - ${this.typeClean} | Вид уборки - ${this.getTypesCleanCheckBox} | Дополнительные услуги - ${this.getOptions}  ${this.additionKeys}`;

			this.isLoading = true;
			emailjs
				.send(
					'service_bi4fnoa',
					'template_0jftpsg',
					{
						from_name: `Имя: ${this.orderForm.value.firstName}, Телефон: ${this.orderForm.value.phone}, E-mail: ${this.orderForm.value.email}`,
						to_name: `ЗАЯВКА = ${data}`,
						message: this.orderForm.value.message,
						reply_to: '',
					},
					'BtuZziYvjSyGPZ09q',
				)
				.then(
					(result: EmailJSResponseStatus) => {
						console.log(result.text);
						this.isLoading = false;
						this.isSendRequest = true;
						this.orderForm.reset();
						this.formService.generalValues$.next([]);
						this.formService.maintenanceValues$.next([]);
						this.formService.windowValues$.next([]);
						this.formService.dryValues$.next([]);

						this.dialog.open(RequestCallComponent, {
							data: {
								isSendRequest: true,
							},
							width: '350px',
						});
					},
					(error) => {
						console.log(error.text);
						alert(error.text);
					},
				);

			this.isTouched = false;
		}
		this.isTouched = true;
		Object.keys(this.orderForm.controls).forEach((field) => {
			const control = this.orderForm.get(field);
			control?.markAsTouched({ onlySelf: true });
		});
	}

	changeClean(title: string) {
		this.typeClean = title;
	}

	private getNameTypeClean(elElement: string) {
		if (elElement === 'clean1') return DEFAULT.clear1;
		if (elElement === 'clean2') return DEFAULT.clear2;
		if (elElement === 'clean3') return DEFAULT.clear3;
		if (elElement === 'clean4') return DEFAULT.clear4;
		return '';
	}

	get additionKeys() {
		return [this.key1, this.key2, this.key3]
			.filter((el: IAdditionKeys) => el.value)
			.map((el) => el.title)
			.join(', ');
	}
}
