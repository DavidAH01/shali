import { Directive, OnInit, HostBinding, OnDestroy } from '@angular/core';

@Directive({
  selector: '[pbdsHeaderShadow]',
})
export class HeaderShadowDirective implements OnInit, OnDestroy {
  @HostBinding('class.shadow') shadow: boolean;

  constructor() { }

  ngOnInit() {
    console.log('hola')
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => this._checkScroll());
    }

  }

  ngOnDestroy() {
    if (typeof window !== undefined) {
      window.removeEventListener('scroll', () => this._checkScroll());
    }
  }

  private _checkScroll() {
    if (typeof window !== undefined) {
      console.log((window.pageYOffset > 70))
      this.shadow = (window.pageYOffset > 70);
    }
  }
}