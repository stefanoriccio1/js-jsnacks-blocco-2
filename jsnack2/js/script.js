var parola1 = prompt('inserisci una parola');
var parola2 = prompt('inserisci un\'altra parola');

var parolaLunga = stampa(parola1, parola2);
console.log(parolaLunga);


function stampa(parola1, parola2){
  var stampaParola = '';
  if(parola1.length == parola2.length){
    stampaParola = parola1 + ' ' + parola2;
  }
  else if(parola1.length > parola2.length){
    stampaParola = parola1;
  }
  else{
    stampaParola = parola2;
  }
  return stampaParola;
}
