import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FormService {
	square$ = new BehaviorSubject<string>('80');
	place$ = new BehaviorSubject<string>('Квартира');

	generalValues$ = new BehaviorSubject<any>([]);
	maintenanceValues$ = new BehaviorSubject<any>([]);
	windowValues$ = new BehaviorSubject<any>([]);
	dryValues$ = new BehaviorSubject<any>([]);
}
