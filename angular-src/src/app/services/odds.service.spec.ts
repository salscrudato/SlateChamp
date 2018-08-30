/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OddsService } from './odds.service';

describe('OddsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OddsService]
    });
  });

  it('should ...', inject([OddsService], (service: OddsService) => {
    expect(service).toBeTruthy();
  }));
});
