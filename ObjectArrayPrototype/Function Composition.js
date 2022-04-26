//http://www.codewars.com/kata/function-composition

function compose(f,g) {
  return function(...args) {
    return f(g(...args));
  }
}