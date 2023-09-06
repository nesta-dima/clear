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
	generalOptions = '';
	constructor(private formService: FormService) {}

	ngOnInit() {
		this.formService.square$.subscribe((square) => {
			this.square = square;
		});
		this.formService.place$.subscribe((place) => {
			this.place = place;
		});
		this.formService.generalOptions$.subscribe((options) => {
			this.generalOptions = options.join(', ');
		});
	}
}
