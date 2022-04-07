//https://www.codewars.com/kata/a-function-within-a-function

function always (n) {
 func=function(temp){
   temp=n;
   return temp;
 }
  return func;
}