import { TestBed } from '@angular/core/testing';

import { AdmCoreApiAlunosService } from './adm-core-api-alunos.service';

describe('AdmCoreApiAlunosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmCoreApiAlunosService = TestBed.get(AdmCoreApiAlunosService);
    expect(service).toBeTruthy();
  });
});
