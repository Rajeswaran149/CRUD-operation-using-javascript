// to find average of a list of integers

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 10];

function calculateAverage(array) {
  var total = 0;
  var count = 0;

  array.forEach(function (item, index) {
    total += item;
    count++;
  });

  return total / count;
}
console.log(calculateAverage(arr));
