var isValid = function(s) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.unshift(s[i]);
    } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      if (brackets[stack[0]] === s[i]) {
        stack.shift();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
isValid('(}[]{}');
