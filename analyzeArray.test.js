const analyzeArray = require('./analyzeArray')
const arr = [1,8,3,4,2,6];

test('Array - Average', () => {
  expect(analyzeArray(arr).average).toBe(4)
});

test('Array - min', () => {
  expect(analyzeArray(arr).min).toBe(1)
});

test('Array - max', () => {
  expect(analyzeArray(arr).max).toBe(8)
});

test('Array - length', () => {
  expect(analyzeArray(arr).length).toBe(6)
});