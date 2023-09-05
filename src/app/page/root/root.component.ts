import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss'],
})
export class RootComponent {
	constructor(private metaService: Meta) {
		this.addTag();
	}

	addTag() {
		this.metaService.addTags([
			{ name: 'description', content: 'LA CLEAN - Профессиональные клининговые услуги в Варшаве' },
			{ name: 'robots', content: 'index,follow' },
			{ property: 'og:title', content: 'Клининговые услуги в Варшаве' },
		]);
	}
}
