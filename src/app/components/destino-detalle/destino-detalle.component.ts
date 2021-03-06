import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { DestinosApiClient } from './../../models/destinos-api-client.model';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
//import { HttpClient } from '@angular/common/http';

interface AppConfig {
  apiEndpoint: string;
}

const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'mi_api.com'
};

const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

//class DestinosApiClientDecorated extends DestinosApiClient {
//  constructor(@Inject(APP_CONFIG) config: AppConfig, store: Store<AppState>, http: HttpClient ) {
//    super(store, config, http);
//  }
//  getById(id: string): DestinoViaje {
//    console.log('llamando por la clase decorada!');
//    console.log('config: ' + this.config.apiEndpoint);
//    return super.getById(id);
//  }
//}

//class DestinosApiClientViejo {
//  getById(id: String): DestinoViaje {
//    console.log('llamando por la clase vieja!');
//    return null;
//  }
//}

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.scss'], 
  providers: [ DestinosApiClient ] 
  //providers: [
  //  { provide: DestinosApiClient, useClass: DestinosApiClientDecorated },
  //  { provide: DestinosApiClientViejo, useExisting: DestinosApiClient },
  //  { provide: APP_CONFIG, useValue: APP_CONFIG_VALUE }
  //]
  //providers: [
  //  DestinosApiClient, 
  //  { provide: DestinosApiClientViejo, useExisting: DestinosApiClient }
  //]
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  style = {
    sources: {
      world: {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
      }
    },
    version: 8,
    layers: [{
      'id': 'countries',
      'type': 'fill',
      'source': 'world',
      'layout': {},
      'paint': {
        'fill-color': '#6F788A'
      }
    }]
  };

  constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClient) {}
  //constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClientViejo) {}

  ngOnInit() {
	  let id = this.route.snapshot.paramMap.get('id');
      this.destino = this.destinosApiClient.getById(id);
  }
}
