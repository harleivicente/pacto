import { async, TestBed } from '@angular/core/testing';
import { AdmContratosApiModule } from './adm-contratos-api.module';

describe('AdmContratosApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdmContratosApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdmContratosApiModule).toBeDefined();
  });
});
