// Basic banking API. This can check balance and deposit.

function Bank(value) {
  var balance = value;
  return {
    deposit: function(val) {
      return val += val
    },
    checkBalance: function() {
      return balance;
    }
  }
}
