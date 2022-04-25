// https://www.codewars.com/kata/array-helpers
Array.prototype.square=function(){
  return this.map(value=>value*value);
}
Array.prototype.cube=function(){
  return this.map(value=>value*value*value);
}
Array.prototype.average=function(){
return this.reduce((value1,value2)=>value1+value2,0)/this.length
}
Array.prototype.sum=function(){
return this.reduce((value1,value2)=>value1+value2,0)
}
Array.prototype.even=function(){
return this.filter(value=>value%2==0)
}
Array.prototype.odd=function(){
return this.filter(value=>value%2!==0)
}