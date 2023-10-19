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
		},
		{
			image: '/assets/images/result-2.png',
			thumbImage: '/assets/images/result-2.png',
		},
		{
			image: '/assets/images/result-3.png',
			thumbImage: '/assets/images/result-3.png',
		},
		{
			image: '/assets/images/result-4.png',
			thumbImage: '/assets/images/result-4.png',
		},
		{
			image: '/assets/images/result-5.png',
			thumbImage: '/assets/images/result-5.png',
		},
		{
			image: '/assets/images/result-6.png',
			thumbImage: '/assets/images/result-6.png',
		},
		{
			image: '/assets/images/result-7.png',
			thumbImage: '/assets/images/result-7.png',
		},
		{
			image: '/assets/images/result-8.png',
			thumbImage: '/assets/images/result-8.png',
		},
		{
			image: '/assets/images/result-9.png',
			thumbImage: '/assets/images/result-9.png',
		},
		{
			image: '/assets/images/result-10.png',
			thumbImage: '/assets/images/result-10.png',
		},
		{
			image: '/assets/images/result-11.png',
			thumbImage: '/assets/images/result-11.png',
		},
		{
			image: '/assets/images/result-12.png',
			thumbImage: '/assets/images/result-12.png',
		},
		{
			image: '/assets/images/result-13.png',
			thumbImage: '/assets/images/result-13.png',
		},
		{
			image: '/assets/images/result-14.png',
			thumbImage: '/assets/images/result-14.png',
		},
		{
			image: '/assets/images/result-15.png',
			thumbImage: '/assets/images/result-15.png',
		},
		{
			image: '/assets/images/result-16.png',
			thumbImage: '/assets/images/result-16.png',
		},
		{
			image: '/assets/images/result-17.png',
			thumbImage: '/assets/images/result-17.png',
		},
		{
			image: '/assets/images/result-18.png',
			thumbImage: '/assets/images/result-18.png',
		},
		{
			image: '/assets/images/result-19.png',
			thumbImage: '/assets/images/result-19.png',
		},
		{
			image: '/assets/images/result-20.png',
			thumbImage: '/assets/images/result-20.png',
		},
		{
			image: '/assets/images/result-21.png',
			thumbImage: '/assets/images/result-21.png',
		},
		{
			image: '/assets/images/result-22.png',
			thumbImage: '/assets/images/result-22.png',
		},
	];
}
