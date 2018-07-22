// Basic banking API. This can check balance and deposit.

function Bank() {
  let balance = 0;
  return {
    deposit: (val) => { balance += val },
    checkBalance: () => balance,
    withdraw: (val) => {
      if (val > balance) {
        console.log('not enough monies')
      } else {
        balance -= val;
        return balance;
      }
    }
  }
}