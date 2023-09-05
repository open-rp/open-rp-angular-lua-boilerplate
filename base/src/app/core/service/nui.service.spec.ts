import { TestBed } from '@angular/core/testing';

import { NUIService } from './nui.service';

describe('NuiService', () => {
  let service: NUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
