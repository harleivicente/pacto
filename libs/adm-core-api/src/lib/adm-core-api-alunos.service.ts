import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AdmCoreApiModule } from './adm-core-api.module';

@Injectable({
  providedIn: AdmCoreApiModule
})
export class AdmCoreApiAlunosService {

  constructor() {}

  obterAlunos() {
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
