import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  @Input('appReveal') revealType: string = 'reveal-up';
  @Input() revealDelay: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Add base reveal class
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    
    // Add specific reveal type (up, down, left, right, scale)
    if (this.revealType) {
      this.renderer.addClass(this.el.nativeElement, this.revealType);
    } else {
      this.renderer.addClass(this.el.nativeElement, 'reveal-up');
    }

    // Add delay if specified
    if (this.revealDelay) {
      this.renderer.addClass(this.el.nativeElement, this.revealDelay);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'revealed');
          // Once animated, we can stop observing
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    });

    observer.observe(this.el.nativeElement);
  }
}
