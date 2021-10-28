const inp = [2, 4];

function calcAvg(arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  const avg = Math.ceil(total / arr.length);
  return avg;
}

console.log(calcAvg(inp));
