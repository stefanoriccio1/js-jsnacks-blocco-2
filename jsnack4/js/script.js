var array1 = [3, 4, 56, 79, 100, 40, 50];
var array2 = [22, 55, 66];

var i =0;
while (array2.length < array1.length || array1.length < array2.length){
if (array2.length < array1.length){
  array2.push(addRandom(1, 20));
}
else if (array1.length < array2.length){
  array1.push(addRandom(1,20));
}
i++;
}
console.log(array2  + ' array2');
console.log(array1  + ' array1');
console.log(array1.length + ' lunghezza array1');
console.log(array2.length + ' lunghezza array2');

// funzione random
function addRandom (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
