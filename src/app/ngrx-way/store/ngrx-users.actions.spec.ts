import * as fromNgrxUsers from './ngrx-users.actions';

describe('loadNgrxUserss', () => {
  it('should return an action', () => {
    expect(fromNgrxUsers.loadNgrxUsers().type).toBe('[NgrxUsers] Load NgrxUserss');
  });
});
