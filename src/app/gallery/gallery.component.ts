import { Component, HostListener, OnInit } from '@angular/core';
import { GalleryItems } from '../Models/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  galleryImages!: Array<any>;

  constructor(private gallery: GalleryItems) {}

  ngOnInit(): void {
    this.galleryImages = this.gallery.galleryImages;
    console.log(this.galleryImages);
  }
}
