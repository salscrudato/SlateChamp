/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BetsService } from './bets.service';

describe('BetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetsService]
    });
  });

  it('should ...', inject([BetsService], (service: BetsService) => {
    expect(service).toBeTruthy();
  }));
});
