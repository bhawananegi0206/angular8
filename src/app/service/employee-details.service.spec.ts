import { TestBed } from '@angular/core/testing';

import { EmployeeDetailsService } from './employee-details.service';

describe('EmployeeDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeDetailsService = TestBed.get(EmployeeDetailsService);
    expect(service).toBeTruthy();
  });
});
