
function digitSum(y) {
   let sum = 0;
   let digit;

   while(y > 0){
      digit = y % 10;
      sum += digit;
      y = Math.floor(y / 10);
   }
   return sum;
}

console.log(digitSum(111));