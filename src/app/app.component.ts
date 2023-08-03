import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'clear';
	fun() {
		console.log('hello');
		const a = 1;
		a = 2;
	}
}
