import { TestBed } from '@angular/core/testing';

import { ApiConfigProviderService } from './api-config-provider.service';

describe('ApiConfigProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConfigProviderService = TestBed.get(ApiConfigProviderService);
    expect(service).toBeTruthy();
  });
});
