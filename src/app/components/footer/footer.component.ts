import { Component } from '@angular/core';
import { SOCIAL } from '../../constants';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	protected readonly SOCIAL = SOCIAL;
}
