import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PAGES, COMPONENTS, SERVICES } from 'src/app/app.common';

@NgModule({
	declarations: [
		AppComponent,
		...PAGES,
		...COMPONENTS
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		...SERVICES
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
