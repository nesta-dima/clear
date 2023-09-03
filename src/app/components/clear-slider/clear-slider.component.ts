import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
	selector: 'app-clear-slider',
	templateUrl: './clear-slider.component.html',
	styleUrls: ['./clear-slider.component.scss'],
})
export class ClearSliderComponent {
	@ViewChild('nav') slider!: NgImageSliderComponent;
	imageObject = [
		{
			image: '/assets/images/review-1.png',
			thumbImage: '/assets/images/review-1.png',
			// title: 'Hummingbirds are amazing creatures',
		},
		{
			image: '/assets/images/review-2.png',
			thumbImage: '/assets/images/review-2.png',
		},
		{
			image: '/assets/images/review-3.png',
			thumbImage: '/assets/images/review-3.png',
			// title: 'Example with title.',
		},
		{
			image: '/assets/images/review-4.png',
			thumbImage: '/assets/images/review-4.png',
			// title: 'Hummingbirds are amazing creatures',
		},
		{
			image: '/assets/images/review-5.png',
			thumbImage: '/assets/images/review-5.png',
		},
		{
			image: '/assets/images/review-6.png',
			thumbImage: '/assets/images/review-6.png',
			// title: 'Example with title.',
		},
	];

	prevImageClick() {
		this.slider.prev();
	}

	nextImageClick() {
		this.slider.next();
	}
}
