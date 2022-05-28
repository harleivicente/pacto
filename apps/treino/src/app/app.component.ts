import { Component, OnInit } from '@angular/core';
import { platafatormaConfig } from '@pacto/sdk';
import { TreinoApiFichasService } from '@pacto/treino-api';
import { AdmCoreApiAlunosService } from '@pacto/adm-core-api';
@Component({
  selector: 'pacto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'treino';
  fichas = [];
  alunos = [];

  get menuConfig() {
    return platafatormaConfig.map(config => {
      return {
        label: config.name,
        url: config.url
      }
    });
  }

  constructor(
    private treinoApiFichasService: TreinoApiFichasService,
    private admCoreApiAlunosService: AdmCoreApiAlunosService
  ) {}

  ngOnInit() {
    this.treinoApiFichasService.obterFichas().subscribe(fichas => this.fichas = fichas);
    this.admCoreApiAlunosService.obterAlunos().subscribe(alunos => this.alunos = alunos);
  }

}
