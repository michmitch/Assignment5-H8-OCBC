import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {

  country: Country | undefined;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.countryService.getCountry(id)
      .subscribe(country => this.country = country);
  }

  goBack(){
    this.location.back();
  }

}
