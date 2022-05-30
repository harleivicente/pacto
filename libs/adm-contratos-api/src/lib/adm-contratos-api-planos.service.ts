import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { of } from 'rxjs';
import { AdmContratosApiModule } from './adm-contratos-api.module';
import { BaseAdapterConfigProviderService } from '@pacto/sdk';

export const ADM_CONTRATO_API_URL = new InjectionToken<string>(null);

@Injectable({
  providedIn: AdmContratosApiModule
})
export class AdmContratosApiPlanosService {
  private apiUrl;

  constructor(
    @Optional() @Inject(ADM_CONTRATO_API_URL) apiUrl,
    @Optional() private config: BaseAdapterConfigProviderService
  ) {
    this.apiUrl = apiUrl;
  }

  obterPlanos() {

    if (!this.config || !this.apiUrl) {
      throw Error('Config provider ou url não configurados');
    }
    
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
