//creo un array con le email accettate
let emailAccettate = ['trallallero@gmail.com', 'ucciuccitarallucci@gmail.com', 'selallero@gmail.com', 'anvediquesto@gmail.com', 'machevoi@gmail.com']; 

//creo il prompt per richiedere la email all'utente
const emailInserita = prompt("Digita la tua e-mail Google facendo attenzione che che termini con '@gmail.com'");

console.log(emailAccettate.length);

let element = false;


for(i = 0; i < emailAccettate.length; i++){

    if (emailInserita == emailAccettate[i]){
        element = true;
    } 

    
}

if(element === true){
    console.log('bravo')
} else if(element === false) {
    console.log('ritenta, sarai più fortunato')
}