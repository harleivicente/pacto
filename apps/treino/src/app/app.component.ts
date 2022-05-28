import { Component } from '@angular/core';
import { platafatormaConfig } from '@pacto/sdk';
@Component({
  selector: 'pacto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'treino';

  get menuConfig() {
    return platafatormaConfig.map(config => {
      return {
        label: config.name,
        url: config.url
      }
    });
  }

}
