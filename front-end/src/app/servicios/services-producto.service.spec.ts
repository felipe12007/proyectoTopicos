import { TestBed } from '@angular/core/testing';

import { ServicesProductoService } from './services-producto.service';

describe('ServicesProductoService', () => {
  let service: ServicesProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
