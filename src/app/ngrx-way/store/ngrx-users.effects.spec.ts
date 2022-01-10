import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NgrxUsersEffects } from './ngrx-users.effects';

describe('NgrxUsersEffects', () => {
  let actions$: Observable<any>;
  let effects: NgrxUsersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgrxUsersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NgrxUsersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
