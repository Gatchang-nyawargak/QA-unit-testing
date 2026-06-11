const { transfer } = require('./mobileMoneyTransfer');

// Positive
test('transfer 50 from 200 returns 150', () => expect(transfer(200, 50)).toBe(150));
test('transfer full balance returns 0', () => expect(transfer(200, 200)).toBe(0));

// Negative
test('amount below 10 throws minimum error', () => {
  expect(() => transfer(200, 5)).toThrow('Minimum transfer is 10');
});
test('amount exceeds balance throws insufficient error', () => {
  expect(() => transfer(200, 300)).toThrow('Insufficient balance');
});

// Boundary
test('transfer exactly 10 succeeds (minimum boundary)', () => expect(transfer(200, 10)).toBe(190));
test('transfer 9 throws (just below minimum)', () => {
  expect(() => transfer(200, 9)).toThrow('Minimum transfer is 10');
});
test('transfer balance - 1 returns 1', () => expect(transfer(200, 199)).toBe(1));

// Edge cases
test('transfer 0 throws minimum error', () => {
  expect(() => transfer(200, 0)).toThrow('Minimum transfer is 10');
});
test('transfer negative amount throws minimum error', () => {
  expect(() => transfer(200, -10)).toThrow('Minimum transfer is 10');
});
