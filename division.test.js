const { divide } = require('./division');

test('divides 10 by 2 = 5', () => expect(divide(10, 2)).toBe(5));
test('throws on divide by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
