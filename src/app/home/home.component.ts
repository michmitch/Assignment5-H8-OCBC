import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: Country[] = [];
  sortPopulation: Country[] = [];
  sortArea: Country[] = [];
  sortGdp: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountries();
    this.sortByPopulation();
    this.sortByArea();
    this.sortByGdp();
  }

  getCountries(){
    this.countryService.getCountries().subscribe(countries => {this.countries = countries});
  }

  sortByPopulation(){
    this.sortPopulation = this.countries.slice().sort(
      function(a,b){
        return b.population - a.population
      }
    );
  }

  sortByArea(){
    this.sortArea = this.countries.slice().sort(
      function(a,b){
        return b.area - a.area
      }
    );
  }

  sortByGdp(){
    this.sortGdp = this.countries.slice().sort(
      function(a,b){
        return b.gdp - a.gdp
      }
    );
  }

}
