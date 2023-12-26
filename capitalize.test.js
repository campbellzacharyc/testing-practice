const capitalize = require('./capitalize');

test('Capitalizes first letter', () => {
  expect(capitalize('test')).toBe('Test');
});