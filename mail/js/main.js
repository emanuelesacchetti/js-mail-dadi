//creo un array con le email accettate
let emailAccettate = ['trallallero@gmail.com', 'ucciuccitarallucci@gmail.com', 'selallero@gmail.com', 'anvediquesto@gmail.com', 'machevoi@gmail.com']; 

//creo il prompt per richiedere la email all'utente
const emailInserita = prompt("Digita la tua e-mail Google facendo attenzione che che termini con '@gmail.com'");

console.log(emailAccettate.length);

//creo un ciclo for che si ripeta per il numero di elementi presenti nell'array
//Ogni volta che la email dell'utente è diversa dal numero d'insieme degli elementi della lista fai qualcosa

for(i = 0; i < emailAccettate.length; i++){

    emailInserita = emailAccettate[i];

    if (emailInserita !== emailAccettate[i]){
        console.log('ciao');
    } else {
        console.log('bau');
    }
}
