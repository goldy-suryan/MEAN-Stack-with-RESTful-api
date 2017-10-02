import { TestBed, inject } from '@angular/core/testing';

import { BlogsServiceResolve } from './blogs.service';

describe('BlogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsServiceResolve]
    });
  });

  it('should be created', inject([BlogsServiceResolve], (service: BlogsServiceResolve) => {
    expect(service).toBeTruthy();
  }));
});
