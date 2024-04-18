import { TestBed } from '@angular/core/testing';

import { SimulatedServerService } from './simulated-server.service';

describe('SimulatedServerService', () => {
  let service: SimulatedServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulatedServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
