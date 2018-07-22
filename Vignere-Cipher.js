// Vigenère Cipher

const encrypt = (input, key) => {
	var result = '';
  const keyNum = convertToNum(key);
  let j = 0;
	for (var i = 0; i < input.length; i++) {
	  const num = input.charCodeAt(i) - 65;
    const currNumKeyValue = keyNum[j % keyNum.length];
    const char = alphabet.charAt((num + currNumKeyValue) % 26);
    result += char;
    j++;
	}
	return result;
}

// working version with UI on Jsfiddle
https://jsfiddle.net/valkyris/ek1j5h02/131/