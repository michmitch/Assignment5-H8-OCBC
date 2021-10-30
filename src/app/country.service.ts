import { Injectable } from '@angular/core';
import { Country } from './models/country';
import { COUNTRIES } from './models/mock-country';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  getCountries(): Observable<Country[]>{
    const countries = of(COUNTRIES);
    return countries;
  }

  getCountry(id: number): Observable<Country> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const country = COUNTRIES.find(c => c.id === id)!;
    return of(country);
  }

  constructor() { }
}
