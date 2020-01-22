var numeroUtente = parseInt(prompt('Inserisci un numero'));

if (primo(numeroUtente) == true){
  alert('è primo');
}
else{
  alert ('non è primo');
}


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
