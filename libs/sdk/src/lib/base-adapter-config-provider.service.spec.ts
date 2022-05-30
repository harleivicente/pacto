import { TestBed } from '@angular/core/testing';

import { BaseAdapterConfigProviderService } from './base-adapter-config-provider.service';

describe('BaseAdapterConfigProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseAdapterConfigProviderService = TestBed.get(BaseAdapterConfigProviderService);
    expect(service).toBeTruthy();
  });
});
