const { getGrade } = require('./gradeCalculator');

test('59 is F', () => expect(getGrade(59)).toBe('F'));
test('60 is C (boundary)', () => expect(getGrade(60)).toBe('C'));
test('69 is C', () => expect(getGrade(69)).toBe('C'));
test('70 is B (boundary)', () => expect(getGrade(70)).toBe('B'));
test('79 is B', () => expect(getGrade(79)).toBe('B'));
test('80 is A (boundary)', () => expect(getGrade(80)).toBe('A'));
