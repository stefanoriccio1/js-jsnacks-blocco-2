var numeriPrimi = [];
var risultato = numero(numeriPrimi);

for (var i = 0; i < 100; i++) {
  if (primo(i) == true){
    numeriPrimi.push(i);
  }
}
console.log(numeriPrimi);
console.log(numeriPrimi.indexOf(97));

function numero(numeriPrimi){
  var somma = 0;
for (var i=0; i < numeriPrimi.length; i++){
  if (isOdd(numeriPrimi.indexOf(i) == true)){
    somma = somma + numeriPrimi[i]
  }
  return somma;
}
}
console.log(risultato);
// funzioni

function primo (number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0){
      return false;
    }
  }
  if (number == 1 || number == 2){
    return true;
  }
  return true;
};

function isOdd (number){
  if (number % 2 == 0) {
    return false;
  }
  else{
    return true;
  }
}
