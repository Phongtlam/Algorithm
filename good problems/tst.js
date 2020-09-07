const sumTwo = (str1 = "", str2 = "") => {
  if (str1 === "0") return str2;
  if (str2 === "0") return str1;
  let carry = 0;
  let lng = Math.max(str1.length, str2.length);
  let res = "";
  for (let i = lng - 1; i >= 0; i--) {
    const f1 = parseInt(str1.charAt(i) || "0");
    const f2 = parseInt(str2.charAt(i) || "0");
    let sum = f1 + f2 + carry;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    res = sum + res;
  }

  if (carry) res = carry + res;
  return res;
}

