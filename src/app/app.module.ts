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
@NgModule({
	declarations: [AppComponent, HeaderComponent, MainHeaderComponent, AboutCompanyComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
		HttpClientModule,
	],
	providers: [AboutCompanyService],
	bootstrap: [AppComponent],
})
export class AppModule {}
