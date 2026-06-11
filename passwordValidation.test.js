const { validatePassword } = require('./passwordValidation');

test('valid password (8+ chars) returns true', () => {
  expect(validatePassword('secure123')).toBe(true);
});

test('short password throws error', () => {
  expect(() => validatePassword('abc')).toThrow('Password too short');
});
