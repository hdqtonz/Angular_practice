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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GalleryItems],
  bootstrap: [AppComponent],
})
export class AppModule {}
