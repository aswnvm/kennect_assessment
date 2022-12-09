isPrime = (num) => {	
    let f = true;	
	num = document.myform.num.value;
    num = parseInt(num)
   let sqrtnum = Math.floor(Math.sqrt(num));
   let prime = num;
   
   for(let i = 2; i < sqrtnum + 1; i++){

       if(num % i == 0){
           
           f = false;
           break;
       }
   }
   alert(prime+ "Is prime");
   return prime;
}
nextPrime = (num) => {

   while(!isPrime(++num)){
   }

   return num;
   alert(num+ "Is prime");
}
console.log(isPrime(num));