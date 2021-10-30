import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'allcountries', component: AllcountriesComponent },
  { path: 'countrydetail/:id', component: CountrydetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
