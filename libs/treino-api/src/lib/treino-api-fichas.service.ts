import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TreinoApiModule } from './treino-api.module';

@Injectable({
  providedIn: TreinoApiModule
})
export class TreinoApiFichasService {

  constructor() {}

  obterFichas() {
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
