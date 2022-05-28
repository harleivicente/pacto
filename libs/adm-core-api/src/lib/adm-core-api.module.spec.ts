import { async, TestBed } from '@angular/core/testing';
import { AdmCoreApiModule } from './adm-core-api.module';

describe('AdmCoreApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdmCoreApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdmCoreApiModule).toBeDefined();
  });
});
