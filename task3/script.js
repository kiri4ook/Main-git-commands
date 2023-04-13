
function getSqrtBySequentialSelection(number) {
   for(i = 0; i < number; i++){
      if( number / i == i) {
         return i;
      }
   }
}

function getSqrtByBinarySearch(number) {
   let first = 0;
   let middle;
   let last = number;
   while(first <= last) {
      middle = Math.floor((first + last) / 2);
      if(number / middle == middle) {
         return middle;
      } else if(number / middle < middle) {
         last = middle - 1;
      } else if(number / middle > middle) {
         first = middle + 1
      }
   }
}