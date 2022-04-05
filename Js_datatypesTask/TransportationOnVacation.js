function rentalCarCost(d) {
  // Your solution here
  var total=d*40;
  if(d<7 && d>=3){
    total = (total-20);
    return total;
  }
  else if (d<3){
    return total;
  }
  else if(d>=7){
    total=(total-50);
    return total;
  }
}