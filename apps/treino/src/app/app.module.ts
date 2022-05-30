import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from '@pacto/ui';
import { TreinoApiModule, TREINO_API_URL } from '@pacto/treino-api';
import { AdmCoreApiModule, ADM_CORE_API_URL } from '@pacto/adm-core-api';
import { BaseAdapterConfigProviderService } from '@pacto/sdk';

import { ApiConfigProviderService } from './api-config-provider.service';
import { AppComponent } from './app.component';

const apiUrl = {
  admCoreApi: `https://adm-core.pactosolucoes.com.br`,
  treinoApi: `https://treino.pactosolucoes.com.br`
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    TreinoApiModule,
    AdmCoreApiModule
  ],
  providers: [
    {
      provide: BaseAdapterConfigProviderService,
      useClass: ApiConfigProviderService
    },
    {
      provide: TREINO_API_URL,
      useValue: apiUrl.treinoApi
    },
    {
      provide: ADM_CORE_API_URL,
      useValue: apiUrl.admCoreApi
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
