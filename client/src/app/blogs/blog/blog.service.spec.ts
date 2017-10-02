import { TestBed, inject } from '@angular/core/testing';

import { BlogResolve } from './blog.service';

describe('BlogResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogResolve]
    });
  });

  it('should be created', inject([BlogResolve], (service: BlogResolve) => {
    expect(service).toBeTruthy();
  }));
});
