import { Injectable } from '@angular/core';

export interface BaseAdapterConfig {
  token: string;
  empresaId: string;
}

@Injectable()
export abstract class BaseAdapterConfigProviderService {

  getConfig: () => BaseAdapterConfig;

}
