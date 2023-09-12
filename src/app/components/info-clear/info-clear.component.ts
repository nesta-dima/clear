import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
// import emailjs from '@emailjs/browser';

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

	square = '';
	place = '';
	generalOptions = [];
	maintenanceOptions = [];
	windowOptions = [];
	dryOptions = [];
	typeClean = 'разовая уборка';

	orderForm = this.fb.group({
		firstName: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		phone: ['', [Validators.required]],
		message: [''],
	});
	constructor(
		private formService: FormService,
		public fb: FormBuilder,
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
	}

	get getOptions() {
		return [...this.generalOptions, ...this.maintenanceOptions, ...this.windowOptions, ...this.dryOptions].join(', ');
	}

	sendOrder() {
		if (this.orderForm.valid) {
			alert('We are working on it');
		}

		Object.keys(this.orderForm.controls).forEach((field) => {
			const control = this.orderForm.get(field);
			control?.markAsTouched({ onlySelf: true });
		});

		// emailjs.init('BtuZziYvjSyGPZ09q');
		// emailjs.send('service_bi4fnoa', 'template_0jftpsg', {
		// 	from_name: 'Дмитрий',
		// 	to_name: '+395124123123',
		// 	message:
		// 		'Общая площадь: 80 м2\n' +
		// 		'\n' +
		// 		'Помещение:\n' +
		// 		'\n' +
		// 		'Вид уборки: Поддерживаящая\n' +
		// 		'\n' +
		// 		'Периодичность: разовая уборка\n' +
		// 		'\n' +
		// 		'Дополнительные услуги:Погладить белье, Дополнительные часы, Дополнительный сан. узел, Уборка гардероба',
		// });
	}

	changeClean(title: string) {
		this.typeClean = title;
	}
}
