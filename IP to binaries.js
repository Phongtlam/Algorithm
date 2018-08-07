// Function to convert an string of IP address into binaries

function convert(ip) {
  let stringIp = ip.split('.');
  return stringIp.map( el => toBinary(Number(el)) ).join('.');
}

function toBinary(num) {
  let bits = [ 128, 64, 32, 16, 8, 4, 2, 1 ];
  let result = '';
  for (let i = 0; i < bits.length; i++) {
    let value = num - bits[i];
    if (value >= 0) {
      result += 1;
      num = value;
    } else {
      result += 0;
    }
  }
  return result;
}