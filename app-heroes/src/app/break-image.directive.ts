import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBreakImage]'
})
export class BreakImageDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')

  imageDefault(){
    const element = this.elementRef.nativeElement
    element.src = 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg';
  }

}
