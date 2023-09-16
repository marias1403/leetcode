/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let binaryX = x.toString(2);
  let binaryY = y.toString(2);
  const maxLength = Math.max(binaryX.length, binaryY.length);
  const paddedX = binaryX.padStart(maxLength, '0');
  const paddedY = binaryY.padStart(maxLength, '0');
  let output = 0;
  for (let i = 0; i < paddedX.length; i++) {
    if (paddedX[i] !== paddedY[i]) {
      output++;
    }
  }
  return output;
};

hammingDistance(1, 4);