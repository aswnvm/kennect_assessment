function isPrime() {
  var n, i, flag = true;
  n = document.myform.n.value;
  n = parseInt(n);
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    find = nextPrime(n);

  }
  else
    alert(n + " is not a prime number");
}

function nextPrime(n) {
  alert(n + " is  a prime number");
  var i, flag, next, diff = false;
  for (next = n + 1; next < 50; next++)
    for (i = 2; i < next; i++) {
      if (next % i != 0) {
        flag = true
        break;
      }
      break;
    }

  diff = next - n;
  if (flag == true)
    alert(next + " is the next closest prime number and " + diff + " is the difference between them.")
}
