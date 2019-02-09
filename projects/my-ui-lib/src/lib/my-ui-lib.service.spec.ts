import { TestBed } from '@angular/core/testing';

import { MyUiLibService } from './my-ui-lib.service';

describe('MyUiLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyUiLibService = TestBed.get(MyUiLibService);
    expect(service).toBeTruthy();
  });
});
