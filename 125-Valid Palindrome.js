var isPalindrome = function(s) {
  if (s.length === 0) return true;
  let first = 0;
  let last = s.length - 1;
  let mid = Math.ceil(s.length / 2);
  let reg = /^[a-zA-Z0-9]*$/i;
  while (first < last) {
    while (!reg.test(s[first])) {
      first++;
    }
    while (!reg.test(s[last])) {
      last--;
    }
    if ((!s[first] && s[last]) || (s[first] && !s[last])) {
      return false;
    }
    if (s[first] && s[last] && s[first].toLowerCase() !== s[last].toLowerCase()) {
      return false;
    } else {
      first++;
      last--;
    }
  }
  return true;
};
