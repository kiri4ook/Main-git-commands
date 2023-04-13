
function myFunction(a, b) {
   let sum = 0;
   let count = 0;
   for(i = a; i <= b; i++) {
      if(i % 2 == 0) {
         sum += i;
         count++;
      }
   }
}

myFunction(2, 6)