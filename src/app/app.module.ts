import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountrydetailComponent,
    AllcountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
