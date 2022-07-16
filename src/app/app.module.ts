import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShinePipe } from './pipes/shine.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItems } from './Models/gallery';
import { ChildComponent } from './child/child.component';
import { TestDirective } from './directives/test.directive';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';
import { DropdwonDirective } from './directives/dropdwon.directive';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MypipeComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    ShinePipe,
    FilterPipe,
    GalleryComponent,
    ChildComponent,
    TestDirective,
    Com1Component,
    Com2Component,
    Com3Component,
    Com4Component,
    DropdwonDirective,
    CompanyComponent,
    PersonComponent,
    BookComponent,
    BookDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GalleryItems],
  bootstrap: [AppComponent],
})
export class AppModule {}
