import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

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
}
