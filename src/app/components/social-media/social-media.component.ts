import { Component } from '@angular/core';
import { SOCIAL } from '../../constants';

@Component({
	selector: 'app-social-media',
	templateUrl: './social-media.component.html',
	styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
	protected readonly SOCIAL = SOCIAL;
}
