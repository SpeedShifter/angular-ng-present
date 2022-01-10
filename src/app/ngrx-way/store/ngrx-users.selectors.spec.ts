import * as fromNgrxUsers from './ngrx-users.reducer';
import { selectNgrxUsersState } from './ngrx-users.selectors';

describe('NgrxUsers Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNgrxUsersState({
      [fromNgrxUsers.ngrxUsersFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
