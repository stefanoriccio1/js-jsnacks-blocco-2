numeroUtente = parseInt(prompt('inserisci numero'))

if (isEven (numeroUtente)) {
  console.log(numeroUtente);
}
else{
  console.log((numeroUtente) + 1);
}

function isEven (numero){
  if (numeroUtente % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}
