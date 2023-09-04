import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
	selector: 'app-result-slider',
	templateUrl: './result-slider.component.html',
	styleUrls: ['./result-slider.component.scss'],
})
export class ResultSliderComponent {
	@ViewChild('nav') slider!: NgImageSliderComponent;
	imageObject = [
		{
			image: '/assets/images/result-1.png',
			thumbImage: '/assets/images/result-1.png',
			// title: 'Hummingbirds are amazing creatures',
		},
		{
			image: '/assets/images/result-2.png',
			thumbImage: '/assets/images/result-2.png',
		},
		{
			image: '/assets/images/result-3.png',
			thumbImage: '/assets/images/result-3.png',
			// title: 'Example with title.',
		},
		{
			image: '/assets/images/result-4.png',
			thumbImage: '/assets/images/result-4.png',
			// title: 'Hummingbirds are amazing creatures',
		},
		{
			image: '/assets/images/result-5.png',
			thumbImage: '/assets/images/result-5.png',
		},
		{
			image: '/assets/images/result-6.png',
			thumbImage: '/assets/images/result-6.png',
			// title: 'Example with title.',
		},
		{
			image: '/assets/images/result-7.png',
			thumbImage: '/assets/images/result-7.png',
			// title: 'Hummingbirds are amazing creatures',
		},
		{
			image: '/assets/images/result-8.png',
			thumbImage: '/assets/images/result-8.png',
		},
		{
			image: '/assets/images/result-9.png',
			thumbImage: '/assets/images/result-9.png',
			// title: 'Example with title.',
		},
		{
			image: '/assets/images/result-10.png',
			thumbImage: '/assets/images/result-10.png',
			// title: 'Hummingbirds are amazing creatures',
		},
		{
			image: '/assets/images/result-11.png',
			thumbImage: '/assets/images/result-11.png',
		},
		{
			image: '/assets/images/result-12.png',
			thumbImage: '/assets/images/result-12.png',
			// title: 'Example with title.',
		},
		{
			image: '/assets/images/result-13.png',
			thumbImage: '/assets/images/result-13.png',
			// title: 'Example with title.',
		},
		{
			image: '/assets/images/result-14.png',
			thumbImage: '/assets/images/result-14.png',
			// title: 'Hummingbirds are amazing creatures',
		},
		{
			image: '/assets/images/result-15.png',
			thumbImage: '/assets/images/result-15.png',
		},
		{
			image: '/assets/images/result-16.png',
			thumbImage: '/assets/images/result-16.png',
			// title: 'Example with title.',
		},
	];
}
