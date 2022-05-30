import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { of } from 'rxjs';

import { BaseAdapterConfigProviderService } from '@pacto/sdk';
import { AdmCoreApiModule } from './adm-core-api.module';

export const ADM_CORE_API_URL = new InjectionToken<string>(null);

@Injectable({
  providedIn: AdmCoreApiModule
})
export class AdmCoreApiAlunosService {
  private apiUrl;

  constructor(
    @Optional() @Inject(ADM_CORE_API_URL) apiUrl,
    @Optional() private config: BaseAdapterConfigProviderService
  ) {
    this.apiUrl = apiUrl;  
  }

  obterAlunos() {

    if (!this.config || !this.apiUrl) {
      throw Error('Config provider ou url não configurados');
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
