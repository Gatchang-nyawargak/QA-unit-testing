const { isAdult } = require('./isAdult');

test('age 18 is adult', () => expect(isAdult(18)).toBe(true));
test('age 25 is adult', () => expect(isAdult(25)).toBe(true));
test('age 17 is not adult', () => expect(isAdult(17)).toBe(false));
test('age 0 is not adult', () => expect(isAdult(0)).toBe(false));
