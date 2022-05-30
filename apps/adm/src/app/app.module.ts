import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdmContratosApiModule, ADM_CONTRATO_API_URL } from '@pacto/adm-contratos-api';
import { AdmCoreApiModule, ADM_CORE_API_URL } from '@pacto/adm-core-api';
import { BaseAdapterConfigProviderService } from '@pacto/sdk';
import { UiModule } from '@pacto/ui';

import { AppComponent } from './app.component';
import { ApiConfigProviderService } from './api-config-provider.service';

const apiUrl = {
  admCoreApi: `https://adm-core.pactosolucoes.com.br`,
  admContratosApi: `https://adm-contratos.pactosolucoes.com.br`
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    AdmCoreApiModule,
    AdmContratosApiModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [
    {
      provide: BaseAdapterConfigProviderService,
      useClass: ApiConfigProviderService
    },
    { provide: ADM_CORE_API_URL, useValue: apiUrl.admCoreApi },
    { provide: ADM_CONTRATO_API_URL, useValue: apiUrl.admContratosApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
