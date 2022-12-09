function isPrime(){
  var n, i, flag = true;
  n = document.myform.n.value;
  n = parseInt(n);
  for (i = 2;  i < n; i++){
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
  if(flag == true){
    find = nextPrime(n);
  }
  else
    alert(n + " is not a prime number");
}

function nextPrime(n) {
  var j, flag, next, diff = true;
  for (next = n + 1; ; next++) {
    for(j = 2; j < next; j++){
      if(next % j == 0){
        flag = false;
        break;
      }
    }  
  }
  diff = next - n;
  if(flag == true)
    alert(next + " is the next closest prime number of the given prime number " + n + " and " + diff + " is the difference between them.")
}
