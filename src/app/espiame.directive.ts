import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appEspiame]'
})
export class EspiameDirective implements OnInit, OnDestroy {
  static nextId = 0;

  constructor() { }

  log = (mgs: string) => console.log(`Evento #${++EspiameDirective.nextId} ${mgs}`);
  ngOnInit() { this.log('##########********** onInit'); }
  ngOnDestroy() { this.log('##########********** onDestroy'); }
}
