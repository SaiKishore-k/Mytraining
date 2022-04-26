function zero(obj) {return obj ? obj(0): 0}
function one(obj) {return obj ? obj(1): 1}
function two(obj) {return obj ? obj(2): 2}
function three(obj) {return obj ? obj(3): 3}
function four(obj) {return obj ? obj(4): 4}
function five(obj) {return obj ? obj(5): 5}
function six(obj) {return obj ? obj(6): 6}
function seven(obj) {return obj ? obj(7): 7};
function eight(obj) {return obj ? obj(8): 8}
function nine(obj) {return obj ? obj(9): 9}

function plus(y) {return function(x){ return x+y;};};
function minus(y) {return function(x){ return x-y;};};
function times(y) {return function(x){ return x*y;};};
function dividedBy(y) {return function(x){ return Math.floor(x/y);};};