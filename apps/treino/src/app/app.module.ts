import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '@pacto/ui';
import { AppComponent } from './app.component';
import { TreinoApiModule } from '@pacto/treino-api';
import { AdmCoreApiModule } from '@pacto/adm-core-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    TreinoApiModule,
    AdmCoreApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
