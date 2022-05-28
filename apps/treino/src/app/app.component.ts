import { Component, OnInit } from '@angular/core';
import { platafatormaConfig } from '@pacto/sdk';
import { TreinoApiFichasService } from '@pacto/treino-api';
@Component({
  selector: 'pacto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'treino';
  fichas = [];

  get menuConfig() {
    return platafatormaConfig.map(config => {
      return {
        label: config.name,
        url: config.url
      }
    });
  }

  constructor(private treinoApiFichasService: TreinoApiFichasService) {}

  ngOnInit() {
    this.treinoApiFichasService.obterFichas().subscribe(fichas => this.fichas = fichas);
  }

}
