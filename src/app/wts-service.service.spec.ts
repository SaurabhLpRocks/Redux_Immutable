/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WtsServiceService } from './wts-service.service';

describe('WtsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WtsServiceService]
    });
  });

  it('should ...', inject([WtsServiceService], (service: WtsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
