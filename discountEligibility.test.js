const { qualifiesForDiscount } = require('./discountEligibility');

// Boundary tests: 999, 1000, 1001 are critical because they sit just below,
// at, and just above the threshold — catching off-by-one errors in the condition.
test('999 does not qualify (just below boundary)', () => expect(qualifiesForDiscount(999)).toBe(false));
test('1000 qualifies (exact boundary)', () => expect(qualifiesForDiscount(1000)).toBe(true));
test('1001 qualifies (just above boundary)', () => expect(qualifiesForDiscount(1001)).toBe(true));
