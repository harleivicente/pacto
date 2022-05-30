import { Injectable, Optional } from '@angular/core';
import { of } from 'rxjs';
import { TreinoApiModule } from './treino-api.module';
import { BaseAdapterConfigProviderService } from '@pacto/sdk';

@Injectable({
  providedIn: TreinoApiModule
})
export class TreinoApiFichasService {

  constructor(
    @Optional() private config: BaseAdapterConfigProviderService
  ) {}
  
  obterFichas() {
    
    if (!this.config) {
      throw Error('Config Provider was not provided');
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
