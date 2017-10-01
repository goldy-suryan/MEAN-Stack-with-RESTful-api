import { TestBed, inject } from '@angular/core/testing';

import { BlogServiceResolve } from './blog.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogServiceResolve]
    });
  });

  it('should be created', inject([BlogServiceResolve], (service: BlogServiceResolve) => {
    expect(service).toBeTruthy();
  }));
});
