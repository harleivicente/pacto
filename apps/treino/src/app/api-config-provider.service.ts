import { Injectable } from '@angular/core';
import { BaseAdapterConfig, BaseAdapterConfigProviderService } from '@pacto/sdk';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigProviderService implements BaseAdapterConfigProviderService {

  constructor() { }

  getConfig(): BaseAdapterConfig {
    return {
      token: 'adf234',
      empresaId: '24'
    };
  };


}
