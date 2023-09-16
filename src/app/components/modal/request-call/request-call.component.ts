import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
	selector: 'app-request-call',
	templateUrl: './request-call.component.html',
	styleUrls: ['./request-call.component.scss'],
	standalone: true,
	imports: [
		MatDialogModule,
		NgIf,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
		RouterLink,
		MatProgressSpinnerModule,
	],
})
export class RequestCallComponent {
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		public fb: FormBuilder,
	) {
		this.isSendRequest = data?.isSendRequest || false;
	}
	isSendRequest = false;
	isLoading = false;
	registrationForm = this.fb.group({
		firstName: ['', Validators.required],
		email: ['', [Validators.required, Validators.email]],
		phone: ['', [Validators.required]],
	});

	async onSubmit() {
		if (!this.registrationForm.valid) return;

		this.isLoading = true;
		emailjs
			.send(
				'service_bi4fnoa',
				'template_0jftpsg',
				{
					from_name: this.registrationForm.value.firstName as string,
					to_name: this.registrationForm.value.email as string,
					message: this.registrationForm.value.phone as string,
					reply_to: '......',
				},
				'BtuZziYvjSyGPZ09q',
			)
			.then(
				(result: EmailJSResponseStatus) => {
					console.log(result.text);
					this.isLoading = false;
					this.isSendRequest = true;
				},
				(error) => {
					console.log(error.text);
					alert(error.text);
				},
			);
	}
}
