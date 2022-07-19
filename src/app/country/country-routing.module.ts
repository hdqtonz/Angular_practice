import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailResolver } from './country-detail.resolver';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
      {
        path: 'country-list',
        component: CountryListComponent,
        children: [
          {
            path: 'detail/:countryId',
            component: DetailComponent,
            resolve: { countryDetail: CountryDetailResolver },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
