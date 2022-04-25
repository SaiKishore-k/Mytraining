//http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
  // TODO
  return 'function' == typeof(obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney);
}