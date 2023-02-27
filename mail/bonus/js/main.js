//creo un array con le email accettate
let emailAccettate = ['trallallero@gmail.com', 'ucciuccitarallucci@gmail.com', 'selallero@gmail.com', 'anvediquesto@gmail.com', 'machevoi@gmail.com']; 

//creo il prompt per richiedere la email all'utente
const emailUtente = document.querySelector('#utentEmail');
const valueEmailUtente = emailUtente.value;

const buttonDom = document.querySelector('#send');


buttonDom.addEventListener('click',
    function () {
        let element = false;
        
        for(i = 0; i < emailAccettate.length; i++){

            if (valueEmailUtente == emailAccettate[i]){
                element = true;
            } 
        }


        if(element === true){
            console.log('bravo');
        } else if(element === false) {
            console.log('ritenta, sarai più fortunato');
        }
    }

    
    
)

