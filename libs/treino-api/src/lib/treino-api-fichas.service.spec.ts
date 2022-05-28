import { TestBed } from '@angular/core/testing';

import { TreinoApiFichasService } from './treino-api-fichas.service';

describe('TreinoApiFichasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreinoApiFichasService = TestBed.get(TreinoApiFichasService);
    expect(service).toBeTruthy();
  });
});
