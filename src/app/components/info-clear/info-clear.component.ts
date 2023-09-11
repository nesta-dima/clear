import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
// import emailjs from '@emailjs/browser';

@Component({
	selector: 'app-info-clear',
	templateUrl: './info-clear.component.html',
	styleUrls: ['./info-clear.component.scss'],
})
export class InfoClearComponent implements OnInit {
	square = '';
	place = '';
	generalOptions = [];
	maintenanceOptions = [];
	windowOptions = [];
	dryOptions = [];
	constructor(private formService: FormService) {}

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
		console.log('111');
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
}
