let num = 266219;
num = String(num).split('').reduce(function (a, b) {
  return a * b;

});
console.log(num)
num = num ** 3;
console.log(String(num).substr(0, 2));
