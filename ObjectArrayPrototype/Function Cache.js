//http://www.codewars.com/kata/function-cache

function cache(func) {
  // do your magic here
  var m = {};
  return function () {
    var key = JSON.stringify(arguments);
    if (key in m) return m[key];
    return m[key] = func.apply(null, arguments);
  };
}