import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.models';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-questions',
	templateUrl: './questions.component.html',
	styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
	private _jsonURL = '/assets/data/questions.json';
	questions: Question[] = [];

	public getScreenWidth: any;

	get isDesktop(): boolean {
		return this.getScreenWidth >= 1180;
	}
	constructor(private http: HttpClient) {
		this.getJSON().subscribe((data) => {
			this.questions = data.data;
		});
	}

	ngOnInit() {
		this.getScreenWidth = window.innerWidth;
	}

	@HostListener('window:resize', ['$event'])
	onWindowResize() {
		this.getScreenWidth = window.innerWidth;
	}

	public getJSON(): Observable<any> {
		return this.http.get(this._jsonURL);
	}
}
