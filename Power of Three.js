/**
 * @param {number} n
 * @return {boolean}
 */

// решение в лоб
var isPowerOfThree = function(n) {
  while (n > 1) {
    n = n / 3;
  }
  return n === 1;
};

// решение с логарифмами
var isPowerOfThree = function(n) {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
}
