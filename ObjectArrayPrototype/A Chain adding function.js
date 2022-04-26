//http://www.codewars.com/kata/a-chain-adding-function

function add(n){
  // Let the currying begin!
  var addition=function(newValue){
    return add(n+newValue);
  }
  addition.valueOf=function(){
    return n;
  }
  return addition;
}