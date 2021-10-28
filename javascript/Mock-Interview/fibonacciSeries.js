//I tried this function
function fibonacciSeries(n) {
  var x = 1;
  var fseries = [];
  for (var i = 0; i < n; i++) {
    x += i;
    fseries.push(x);
  }
  return fseries;
}

console.log(fibonacciSeries(6));
