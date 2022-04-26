//https://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  
  if(Math.abs(n)!==parseInt(n)){
    throw new TypeError(`${n} is invalid`);
  }
  if(+n){
    return Array(n).fill(v);
  }
  else{
    return [];
  }
  
}