const { registerUser } = require('./registerUser');

// Positive
test('valid registration returns user object', () => {
  expect(registerUser('Alice', 'alice@example.com', 25)).toEqual({
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
  });
});

// Boundary
test('age exactly 18 registers successfully', () => {
  expect(registerUser('Bob', 'bob@example.com', 18)).toEqual({
    name: 'Bob',
    email: 'bob@example.com',
    age: 18,
  });
});
test('age 17 throws underage error', () => {
  expect(() => registerUser('Bob', 'bob@example.com', 17)).toThrow('Must be 18 or older');
});

// Negative - name
test('empty name throws', () => {
  expect(() => registerUser('', 'alice@example.com', 25)).toThrow('Name required');
});
test('null name throws', () => {
  expect(() => registerUser(null, 'alice@example.com', 25)).toThrow('Name required');
});

// Negative - email
test('email without @ throws', () => {
  expect(() => registerUser('Alice', 'invalidemail.com', 25)).toThrow('Invalid email');
});
test('empty email throws', () => {
  expect(() => registerUser('Alice', '', 25)).toThrow('Invalid email');
});

// Negative - age
test('age 0 throws underage error', () => {
  expect(() => registerUser('Alice', 'alice@example.com', 0)).toThrow('Must be 18 or older');
});
