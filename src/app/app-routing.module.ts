import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActiveteGuard } from './guards/activete.guard';
import { DeactiveteGuard } from './guards/deactivete.guard';
import { HomeComponent } from './home/home.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { PersonComponent } from './person/person.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pipes', component: MypipeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'person', component: PersonComponent },
  { path: 'books', component: BookComponent },
  { path: 'book-detail', component: BookDetailsComponent, outlet: 'bookList' },
  { path: 'ng-template', component: NgTemplateComponent },
  { path: 'ng-container', component: NgContainerComponent },
  { path: 'counter-parent', component: CounterParentComponent },
  { path: 'parent-color', component: ParentColorComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ActiveteGuard] },
  {
    path: 'merchant',
    component: MerchantComponent,
    canDeactivate: [DeactiveteGuard],
  },

  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.module').then((m) => m.CountryModule),
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
