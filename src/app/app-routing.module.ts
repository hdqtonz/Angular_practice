import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pipes', component: MypipeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'person', component: PersonComponent },
  { path: 'books', component: BookComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
