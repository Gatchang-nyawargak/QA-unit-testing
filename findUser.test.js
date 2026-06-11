const { findUser } = require('./findUser');

const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

test('returns user when found', () => {
  expect(findUser(users, 1)).toEqual({ id: 1, name: 'Alice' });
});

test('returns undefined when user not found', () => {
  expect(findUser(users, 99)).toBeUndefined();
});
