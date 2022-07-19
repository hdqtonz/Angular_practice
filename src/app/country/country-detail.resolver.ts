import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { CountryService } from '../service/country.service';

@Injectable({
  providedIn: 'root',
})
export class CountryDetailResolver implements Resolve<boolean> {
  constructor(private router: Router, private countryService: CountryService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    let id: any = route.paramMap.get('countryId');
    console.log(`Resolve form country Id :` + id);

    return this.countryService.getCountriesById(id).pipe(
      map((country) => {
        if (country) {
          return country;
        } else {
          this.router.navigate(['/country/country-list']);
          return null;
        }
      })
    );
  }
}
