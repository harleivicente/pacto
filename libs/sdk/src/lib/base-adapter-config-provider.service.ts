import { Injectable } from '@angular/core';

export interface BaseAdapterConfig {
  url: string;
  token: string;
}

@Injectable()
export abstract class BaseAdapterConfigProviderService {

  getConfig: () => BaseAdapterConfig;

}
