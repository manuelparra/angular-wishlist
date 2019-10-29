import { DestinoViaje } from './destino-viaje.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
  destinos: DestinoViaje[] = [];

  constructor(private store: Store<AppState>) {
    this.store
      .select(state => state.destinos)
      .subscribe((data) => {
        console.log('destinos sub store');
        console.log(data);
        this.destinos = data.items;
      });
    this.store
      .subscribe((data) => {
        console.log('all store');
        console.log(data);
      });
  }

  add(d: DestinoViaje) {
    // aqui invocariamos al servidor
    this.store.dispatch(new NuevoDestinoAction(d));
  }

  elegir(d: DestinoViaje) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }

  getById(id: String): DestinoViaje {
    return this.destinos.filter(function(d) { return d.id.toString() === id; })[0];
  }

  getAll(): DestinoViaje[] {
    return this.destinos;
  }
}
