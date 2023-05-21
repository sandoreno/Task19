import { Directive, Renderer2, ElementRef, Input, HostListener, HostBinding } from '@angular/core';
//Это директива мне позже понадобится
@Directive({
  selector: '[Comp_Dir]'
})
export class Comp_Dir {

  @Input() selectedSize = "28px";
  @Input() defaultSize = "16px";

  private fontSize: string;
  private fontWeight = "normal";

  constructor() {
    this.fontSize = this.defaultSize;
  }

  @HostBinding("style.fontSize") get getFontSize() {

    return this.fontSize;
  }

  @HostBinding("style.fontWeight") get getFontWeight() {

    return this.fontWeight;
  }

  @HostBinding("style.cursor") get getCursor() {
    return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.fontWeight = "bold";
    this.fontSize = this.selectedSize;

  }

  @HostListener("mouseleave") onMouseLeave() {
    this.fontWeight = "normal";
    this.fontSize = this.defaultSize;

  }
}
