import { TestBed } from '@angular/core/testing';

import { AdmContratosApiPlanosService } from './adm-contratos-api-planos.service';

describe('AdmContratosApiPlanosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmContratosApiPlanosService = TestBed.get(AdmContratosApiPlanosService);
    expect(service).toBeTruthy();
  });
});
