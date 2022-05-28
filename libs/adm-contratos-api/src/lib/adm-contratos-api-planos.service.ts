import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AdmContratosApiModule } from './adm-contratos-api.module';

@Injectable({
  providedIn: AdmContratosApiModule
})
export class AdmContratosApiPlanosService {

  constructor() { }

  obterPlanos() {
    return of([
      {
        id: 1,
        name: 'Plano A'
      },
      {
        id: 2,
        name: 'Plano B'
      },
    ]);
  }
}
