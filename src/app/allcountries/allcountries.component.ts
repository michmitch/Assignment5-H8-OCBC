import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnInit {

  allCountries: Country[] = [];
  allCountries2: Country[] = [];

  constructor(private countryService: CountryService) { }

  getAllCountries(){
    this.countryService.getCountries().subscribe(countries => this.allCountries = countries);
    this.countryService.getCountries().subscribe(countries => this.allCountries2 = countries);
  }


  ngOnInit(): void {
    this.getAllCountries();
  }

}
