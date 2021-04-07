import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss']
})

export class AppCarouselComponent implements OnInit{
  galleryScroller: any;
  galleryItemSize: any;
  @ViewChild('carouselContainer', { read: ElementRef, static: false }) public gallery: ElementRef<any>;

  ngOnInit(): void {
    setTimeout(() => {
      this.galleryScroller = this.gallery.nativeElement.querySelector('.carousel-scroller');
      this.galleryItemSize = this.galleryScroller.querySelector('div').clientWidth;
    }, 0);
  }

  scrollToNextPage() {
    this.galleryScroller.scrollBy(this.galleryItemSize, 0);
  }
  scrollToPrevPage() {
    this.galleryScroller.scrollBy(-this.galleryItemSize, 0);
  }
}
