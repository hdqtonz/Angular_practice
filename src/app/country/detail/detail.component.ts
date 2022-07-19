import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public country: any;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('countryId');

    // this.countryService.getCountriesById(this.id).subscribe((res) => {
    //   this.country = res;
    // });

    this.route.paramMap.subscribe((param) => {
      this.id = param.get('countryId');

      this.countryService.getCountriesById(this.id).subscribe((res) => {
        this.country = res;
      });
    });
  }
}
