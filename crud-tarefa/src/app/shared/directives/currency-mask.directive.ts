import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyMask]'
})
export class CurrencyMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: InputEvent) {
    let valor = this.el.nativeElement.value.replace(/\D/g, '');

    if (valor) {
      valor = (parseInt(valor, 10) / 100).toFixed(2);
      valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      valor = 'R$ ' + valor;
    } else {
      valor = '';
    }

    this.el.nativeElement.value = valor;
  }

}
