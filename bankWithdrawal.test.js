const { withdraw } = require('./bankWithdrawal');

// Positive
test('withdraw 100 from 500 returns 400', () => expect(withdraw(500, 100)).toBe(400));

// Negative
test('withdraw more than balance throws', () => {
  expect(() => withdraw(500, 600)).toThrow('Insufficient funds');
});
test('withdraw 0 throws invalid amount', () => {
  expect(() => withdraw(500, 0)).toThrow('Invalid amount');
});
test('withdraw negative amount throws', () => {
  expect(() => withdraw(500, -50)).toThrow('Invalid amount');
});

// Boundary
test('withdraw full balance returns 0', () => expect(withdraw(500, 500)).toBe(0));
test('withdraw 1 returns balance - 1', () => expect(withdraw(500, 1)).toBe(499));
test('withdraw balance - 1 returns 1', () => expect(withdraw(500, 499)).toBe(1));
