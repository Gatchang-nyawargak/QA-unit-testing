const { createUser } = require('./userCreation');

test('creates user with name and age', () => {
  expect(createUser('John', 25)).toEqual({ name: 'John', age: 25 });
});
