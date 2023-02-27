numeroUtente = parseInt(prompt('Digita un numero da 1 a 6'));
console.log(numeroUtente);

numeroGenerato = Math.floor(Math.random() * 6) + 1;
console.log(numeroGenerato);

if (numeroGenerato > numeroUtente){
    console.log('Ha vinto il computer')
} else if (numeroGenerato < numeroUtente){
    console.log('Hai vinto!!!')
} else {
    console.log('Questo è un pareggio!!')
}