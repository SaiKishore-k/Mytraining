//http://www.codewars.com/kata/using-closures-to-share-class-state

var Cat = (function () {
  var cats = {
    sum: 0,
    avgWeight: 0,
    sumWeight: 0,
    
  }
  
  function CatConstructor(name, weight) {
    if (!name || !weight) {
      throw new Error('You must enter valid name and weight');
    }
    cats.sum++;
    this.name = name;

    Object.defineProperty(this, 'weight', {
      get: function () {
        return this._weight || 0;
      },
      set: function(value) {
        cats.sumWeight = cats.sumWeight - this.weight + value;
        cats.avgWeight =  cats.sumWeight / cats.sum;
        return this._weight = value;
      }
    });

    this.weight = weight;
  }
  
  CatConstructor.averageWeight = function () {
    return cats.avgWeight;
  }
  
  return CatConstructor;
  
}());