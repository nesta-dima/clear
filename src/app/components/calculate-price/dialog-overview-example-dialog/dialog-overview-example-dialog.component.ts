import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../calculate-price.interface';

@Component({
	selector: 'app-dialog-overview-example-dialog',
	templateUrl: './dialog-overview-example-dialog.component.html',
	styleUrls: ['./dialog-overview-example-dialog.component.scss'],
})
export class DialogOverviewExampleDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData,
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}