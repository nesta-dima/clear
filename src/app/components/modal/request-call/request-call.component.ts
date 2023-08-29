import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-request-call',
	templateUrl: './request-call.component.html',
	styleUrls: ['./request-call.component.scss'],
	standalone: true,
	imports: [MatDialogModule, NgIf],
})
export class RequestCallComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
