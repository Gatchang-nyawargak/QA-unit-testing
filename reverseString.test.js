const { reverseString } = require('./reverseString');

test('reverses "hello"', () => expect(reverseString('hello')).toBe('olleh'));
test('reverses "QA"', () => expect(reverseString('QA')).toBe('AQ'));
test('empty string returns empty', () => expect(reverseString('')).toBe(''));
