import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable, of } from 'rxjs';
import { Country } from '../model/country';

const country: Country[] = [
  { countryId: '1', name: 'India', capital: 'New Delhi', currency: 'INR' },
  { countryId: '2', name: 'Pakistan', capital: 'Islamabad', currency: 'INR' },
];

let countriesObservable = of(country);
let countriesToDisplayObservable = of(
  country.concat({
    countryId: '3',
    name: 'UK',
    capital: 'London',
    currency: 'GBP',
  })
);
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor() {}

  getCountries(): Observable<Country[]> {
    return countriesToDisplayObservable;
  }

  getCountriesById(id: string) {
    return countriesObservable.pipe(
      map((country: any) =>
        country.find((country: any) => country.countryId === id)
      )
    );
  }
}
