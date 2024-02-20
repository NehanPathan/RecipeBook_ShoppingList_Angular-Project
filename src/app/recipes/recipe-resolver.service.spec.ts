import { TestBed } from '@angular/core/testing';

import { RecipesResolverService } from './recipes-resolver.service';

describe('RecipeResolverService', () => {
  let service: RecipesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
