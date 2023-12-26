function reverseString(string) {
    let newString = []
    for(let i = 0; i <= string.length; i+=1) {
      newString[i] = string[string.length - i];
    }
    return newString.join('');
}

module.exports = reverseString