import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {

  @Input() effect:string = "";
  constructor(private el:ElementRef) { }
  @HostListener('mouseenter') onmouserenter(){
    this.effect === 'underline' ? this.el.nativeElement.style.textDecoration = 'underline' :
                                  this.el.nativeElement.style.fontWeight = '750';


  }
  @HostListener('mouseleave') onmouseleave(){
    this.el.nativeElement.style.textDecoration = 'none';
    this.el.nativeElement.style.fontWeight = '375';
  }
  }