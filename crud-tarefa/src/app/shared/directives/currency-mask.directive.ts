import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyMask]'
})
export class CurrencyMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: InputEvent) {
    const initalValue = this.el.nativeElement.value;

    let value = initalValue.replace(/[^0-9\.]/g, '');

    value = parseFloat(value).toFixed(2);

    if (initalValue !== value) {
      event.stopPropagation();
      this.el.nativeElement.value = value;
    }
  }

}
