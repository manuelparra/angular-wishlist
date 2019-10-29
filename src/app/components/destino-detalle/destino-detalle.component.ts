import { Component, OnInit } from '@angular/core';
import { DestinosApiClient } from './../../models/destinos-api-client.model';
import { DestinoViaje } from './../../models/destino-viaje.model';
import { ActivatedRoute } from '@angular/router';

class DestinosApiClientViejo {
  getById(id: String): DestinoViaje {
    console.log('llamando por la clase vieja!');
    return null;
  }
}

@Component({
  selector: 'app-destino-detalle',
  templateUrl: './destino-detalle.component.html',
  styleUrls: ['./destino-detalle.component.scss'], 
  providers: [
    DestinosApiClient, 
    { provide: DestinosApiClientViejo, useExisting: DestinosApiClient }
  ]
  //providers: [DestinosApiClient]
  
})
export class DestinoDetalleComponent implements OnInit {
  destino: DestinoViaje;

  // constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClient) {}
  constructor(private route: ActivatedRoute, private destinosApiClient: DestinosApiClientViejo) {}

  ngOnInit() {
	  let id = this.route.snapshot.paramMap.get('id');
      this.destino = this.destinosApiClient.getById(id);
  }
}
