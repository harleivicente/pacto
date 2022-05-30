import { Injectable, Optional } from '@angular/core';
import { of } from 'rxjs';
import { AdmCoreApiModule } from './adm-core-api.module';
import { BaseAdapterConfigProviderService } from '@pacto/sdk';

@Injectable({
  providedIn: AdmCoreApiModule
})
export class AdmCoreApiAlunosService {

  constructor(
    @Optional() private config: BaseAdapterConfigProviderService
  ) {
  }

  obterAlunos() {

    if (!this.config) {
      throw Error('Config Provider was not provided');
    }

    return of([
      {
        id: 1,
        name: 'Aluno A'
      },
      {
        id: 2,
        name: 'Aluno B'
      },
      {
        id: 3,
        name: 'Aluno C'
      },
    ]);
  }
}
