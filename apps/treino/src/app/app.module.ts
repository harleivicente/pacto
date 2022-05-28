import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from '@pacto/ui';
import { AppComponent } from './app.component';
import { TreinoApiModule } from '@pacto/treino-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    TreinoApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
