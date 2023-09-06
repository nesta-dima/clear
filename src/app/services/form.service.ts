import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FormService {
	square$ = new BehaviorSubject<string>('80');
	place$ = new BehaviorSubject<string>('');

	generalOptions$ = new BehaviorSubject<any>([]);
}
