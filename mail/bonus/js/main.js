//creo un array con le email accettate
let emailAccettate = ['trallallero@gmail.com', 'ucciuccitarallucci@gmail.com', 'selallero@gmail.com', 'anvediquesto@gmail.com', 'machevoi@gmail.com']; 

//creo il prompt per richiedere la email all'utente
const emailUtente = document.querySelector('#utentEmail');

const buttonDom = document.querySelector('#send');

const risultateDom = document.querySelector('#risultato');


buttonDom.addEventListener('click',
    function () {
        const valueEmailUtente = emailUtente.value;
        let element = false;

        for(i = 0; i < emailAccettate.length; i++){

            if (valueEmailUtente == emailAccettate[i]){
                element = true;
            } 
        }


        if(element === true){
            risultateDom.innerHTML = 'Accesso permesso';
        } else if(element === false) {
            risultateDom.innerHTML = 'Ritenta! Sarai più fortunato';
        }

        


    }

    
    
)

