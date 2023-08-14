import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { displayDriverLicense } from './test';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [AppComponent],
		}).compileComponents();
	});

	// it('should create the app', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.componentInstance;
	// 	expect(app).toBeTruthy();
	// });

	it('should return "-" if both licenseState and licenseNumber are undefined', () => {
		const result = displayDriverLicense(undefined, undefined);
		expect(result).toBe('-');
	});

	it('should return licenseState if licenseNumber is undefined', () => {
		const result = displayDriverLicense('NY', undefined);
		expect(result).toBe('NY');
	});

	it('should return licenseNumber if licenseState is undefined', () => {
		const result = displayDriverLicense(undefined, '123456');
		expect(result).toBe('123456');
	});

	it('should return the concatenated string of licenseState and licenseNumber', () => {
		const result = displayDriverLicense('NY', '123456');
		expect(result).toBe('NY 123456');
	});

	// it(`should have as title 'clear'`, () => {
	// 	// const fixture = TestBed.createComponent(AppComponent);
	// 	// const app = fixture.componentInstance;
	// 	expect('123').toEqual('123');
	// });

	// it('should render title', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.nativeElement as HTMLElement;
	// 	expect(compiled.querySelector('.content span')?.textContent).toContain('clear app is running!');
	// });
});
