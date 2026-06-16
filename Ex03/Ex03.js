let count = 0;   // đếm số nguyên tố đã tìm được
let number = 2;  // bắt đầu từ số 2

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

while (count < 20) {
  if (isPrime(number)) {
    console.log(number);
    count++;
  }
  number++;
}