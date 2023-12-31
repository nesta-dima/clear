import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { AboutCompanyService } from './services/about-company.service';
import { HttpClientModule } from '@angular/common/http';
import { CalculatePriceComponent } from './components/calculate-price/calculate-price.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { QuestionsComponent } from './components/questions/questions.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoClearComponent } from './components/info-clear/info-clear.component';
import { RootComponent } from './page/root/root.component';
import { NotExistComponent } from './page/not-exist/not-exist.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ClearSliderComponent } from './components/clear-slider/clear-slider.component';
import { ResultSliderComponent } from './components/result-slider/result-slider.component';
import { GeneralCleanComponent } from './components/calculate-price/typesClean/general-clean/general-clean.component';
import { MaintenanceCleanComponent } from './components/calculate-price/typesClean/maintenance-clean/maintenance-clean.component';
import { DryCleanComponent } from './components/calculate-price/typesClean/dry-clean/dry-clean.component';
import { WindowCleanComponent } from './components/calculate-price/typesClean/window-clean/window-clean.component';
import { DifferentCleanComponent } from './components/calculate-price/typesClean/different-clean/different-clean.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainHeaderComponent,
		AboutCompanyComponent,
		CalculatePriceComponent,
		QuestionsComponent,
		SocialMediaComponent,
		FooterComponent,
		InfoClearComponent,
		RootComponent,
		NotExistComponent,
		HowWeWorkComponent,
		ClearSliderComponent,
		ResultSliderComponent,
		GeneralCleanComponent,
		MaintenanceCleanComponent,
		DryCleanComponent,
		WindowCleanComponent,
		DifferentCleanComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
		HttpClientModule,
		MatButtonToggleModule,
		MatTooltipModule,
		MatCheckboxModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		ReactiveFormsModule,
		MatDialogModule,
		NgImageSliderModule,
		MatDialogModule,
		MatRadioModule,
		MatInputModule,
	],
	providers: [AboutCompanyService],
	bootstrap: [AppComponent],
})
export class AppModule {}
