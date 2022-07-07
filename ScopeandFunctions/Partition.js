//https://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
   var tru=items.filter(element => pred(element));//filter true elements
  var fals=items.filter(element => !pred(element));//filter false elements
  items.splice(0);//remove elements from index 0
  items.push(...fals);//add false elements
  items.push(...tru);//add true elements
  return fals.length;

}