
function getFactorial(n) {
   let factorial = 1;
   for(i = 1; i <= n; i++) {
      factorial *= i;
   }
   return factorial;
}

console.log(getFactorial(5))