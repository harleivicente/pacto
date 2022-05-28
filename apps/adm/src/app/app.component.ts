import { Component, OnInit } from '@angular/core';
import { AdmCoreApiAlunosService } from '@pacto/adm-core-api';
import { platafatormaConfig } from '@pacto/sdk';
import { AdmContratosApiPlanosService } from '@pacto/adm-contratos-api';

@Component({
  selector: 'pacto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adm';
  alunos = [];
  planos = [];

  get menuConfig() {
    return platafatormaConfig.map(config => {
      return {
        label: config.name,
        url: config.url
      }
    });
  }

  constructor(
    private admCoreApiAlunosService: AdmCoreApiAlunosService,
    private admContratosApiPlanosService: AdmContratosApiPlanosService
  ) {}

  ngOnInit() {
    this.admCoreApiAlunosService.obterAlunos().subscribe(alunos => this.alunos = alunos);
    this.admContratosApiPlanosService.obterPlanos().subscribe(planos => this.planos = planos);
  }

}
