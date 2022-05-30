import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { of } from 'rxjs';
import { TreinoApiModule } from './treino-api.module';
import { BaseAdapterConfigProviderService } from '@pacto/sdk';

export const TREINO_API_URL = new InjectionToken<string>(null);

@Injectable({
  providedIn: TreinoApiModule
})
export class TreinoApiFichasService {
  private apiUrl;
  
  constructor(
    @Optional() @Inject(TREINO_API_URL) apiUrl,
    @Optional() private config: BaseAdapterConfigProviderService
  ) {
    this.apiUrl = apiUrl;
  }
  
  obterFichas() {
    
    if (!this.config || !this.apiUrl) {
      throw Error('Config provider ou url não configurados');
    }

    return of([
      {
        id: 1,
        name: 'Ficha A'
      },
      {
        id: 2,
        name: 'Ficha B'
      },
      {
        id: 3,
        name: 'Ficha C'
      },
      {
        id: 4,
        name: 'Ficha D'
      },
    ])
  }

}
