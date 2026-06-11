const { addToCart } = require('./shoppingCart');

test('adds item to empty cart', () => {
  expect(addToCart([], 'apple')).toEqual(['apple']);
});

test('adds item to cart with existing items', () => {
  expect(addToCart(['apple'], 'banana')).toEqual(['apple', 'banana']);
});

test('allows duplicate items', () => {
  expect(addToCart(['apple'], 'apple')).toEqual(['apple', 'apple']);
});
