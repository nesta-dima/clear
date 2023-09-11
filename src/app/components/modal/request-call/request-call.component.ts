import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
	selector: 'app-request-call',
	templateUrl: './request-call.component.html',
	styleUrls: ['./request-call.component.scss'],
	standalone: true,
	imports: [MatDialogModule, NgIf],
})
export class RequestCallComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

	public sendEmail(e: Event) {
		e.preventDefault();
		// console.log(' e.target', e.target);
		// TODO: send values to the backend
		emailjs.sendForm('service_s77665b', 'template_2ivum47', '', 'tKf2zw7HDXxukyEN2').then(
			(result: EmailJSResponseStatus) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			},
		);
	}
}
