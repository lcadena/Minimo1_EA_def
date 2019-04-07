import { TestBed } from '@angular/core/testing';

import { AsignaturaService } from './asignatura.service';

describe('AsignaturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignaturaService = TestBed.get(AsignaturaService);
    expect(service).toBeTruthy();
  });
});
