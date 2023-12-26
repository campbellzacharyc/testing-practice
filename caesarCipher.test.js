const caesarCipher = require('./caesarCipher')

const plain = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'bcdefghijklmnopqrstuvwxyza';
test(`Cipher all letters`, () => {
  expect(caesarCipher(plain, 1)).toBe(cipher);
});

const special = '!@#$';
test('Cipher ignore special characters', () => {
  expect(caesarCipher(special, 1)).toBe(special);
});

const plainCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const cipherCaps = 'BCDEFGHIJKLMNOPQRSTUVWXYZA';
test('Cipher works with capitals', () => {
  expect(caesarCipher(plainCaps, 1)).toBe(cipherCaps);
});

const shift = 5
const shiftPlain = `attack at dawn!`
const shiftCipher = `fyyfhp fy ifbs!`
test('Cipher shifts any number', () => {
  expect(caesarCipher(shiftPlain, shift)).toBe(shiftCipher)
});