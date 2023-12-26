const calculator = require('./calculator')

test('Calculator - Add', () => {
  expect(calculator(1, '+', 2)).toBe(3);
});
test('Calculator - Subtract', () => {
  expect(calculator(5, '-', 2)).toBe(3);
});
test('Calculator - Multiplication', () => {
  expect(calculator(3, '*', 5)).toBe(15);
});
test('Calculator - Division', () => {
  expect(calculator(25, '/', 5)).toBe(5);
});