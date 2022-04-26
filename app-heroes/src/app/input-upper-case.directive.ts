import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputUpperCase]'
})
export class InputUpperCaseDirective {

  constructor(private elementRef: ElementRef) { }
  
  @HostListener('input', ['$event']) onInputChange($event: any){
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase()
  }

}
