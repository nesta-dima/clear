import { Component } from '@angular/core';
import { SOCIAL } from '../../constants';
import { ViewportScroller } from '@angular/common';

@Component({
	selector: 'app-main-header',
	templateUrl: './main-header.component.html',
	styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
	constructor(private scroller: ViewportScroller) {}
	links = [SOCIAL.INSTAGRAM, SOCIAL.FACEBOOK, SOCIAL.TELEGRAM, SOCIAL.WHATSAPP];

	scroll() {
		this.scroller.scrollToAnchor('price');
	}
}
