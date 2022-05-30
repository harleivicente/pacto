import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '@pacto/ui';
import { BaseAdapterConfigProviderService } from '@pacto/sdk';
import { AdmCoreApiModule } from '@pacto/adm-core-api';
import { AdmContratosApiModule } from '@pacto/adm-contratos-api';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ApiConfigProviderService } from './api-config-provider.service';

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
      provide: BaseAdapterConfigProviderService, useClass: ApiConfigProviderService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
