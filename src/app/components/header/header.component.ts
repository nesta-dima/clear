import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestCallComponent } from '../modal/request-call/request-call.component';
import { SOCIAL } from '../../constants';
import { ViewportScroller } from '@angular/common';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	links = [SOCIAL.INSTAGRAM, SOCIAL.FACEBOOK, SOCIAL.TELEGRAM, SOCIAL.WHATSAPP];
	constructor(
		public dialog: MatDialog,
		private viewportScroller: ViewportScroller,
	) {}
	isOpen = false;
	openMenu() {
		this.isOpen = !this.isOpen;
		if (this.isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	openModal() {
		this.dialog.open(RequestCallComponent, {
			width: '250px',
		});
	}

	onClickScroll(section: string) {
		if (this.isOpen) this.openMenu();
		this.viewportScroller.scrollToAnchor(section);
	}

	protected readonly SOCIAL = SOCIAL;
}
