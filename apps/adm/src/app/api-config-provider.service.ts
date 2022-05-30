import { Injectable } from '@angular/core';
import { BaseAdapterConfig, BaseAdapterConfigProviderService } from '@pacto/sdk';

@Injectable()
export class ApiConfigProviderService implements BaseAdapterConfigProviderService {

  constructor() {}

  getConfig(): BaseAdapterConfig {
    return {
      token: '',
      url: ''
    }
  }
}
