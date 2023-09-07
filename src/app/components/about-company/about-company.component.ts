import { Component, OnInit } from '@angular/core';
import { AboutCompanyService } from '../../services/about-company.service';

@Component({
	selector: 'app-about-company',
	templateUrl: './about-company.component.html',
	styleUrls: ['./about-company.component.scss'],
})
export class AboutCompanyComponent implements OnInit {
	constructor(private service: AboutCompanyService) {}

	ngOnInit() {
		const items = this.service.getItems().subscribe((result) => {
			console.log();
		});
	}
}
