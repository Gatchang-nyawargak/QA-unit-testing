const { isValidUsername } = require('./usernameValidation');

test('4 characters is invalid', () => expect(isValidUsername('abcd')).toBe(false));
test('5 characters is valid (boundary)', () => expect(isValidUsername('abcde')).toBe(true));
test('6 characters is valid', () => expect(isValidUsername('abcdef')).toBe(true));
