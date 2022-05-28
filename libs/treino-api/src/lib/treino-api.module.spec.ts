import { async, TestBed } from '@angular/core/testing';
import { TreinoApiModule } from './treino-api.module';

describe('TreinoApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TreinoApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TreinoApiModule).toBeDefined();
  });
});
