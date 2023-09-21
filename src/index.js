module.exports = function reverse (n) {
    const reversedString = String(n).split('').reverse().join('');
    return parseInt(reversedString);
}
