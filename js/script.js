console.log('js ok')

// BONUS. Prendere un elemento dal DOM -Creare il collegamento fuori dal ciclo creato precedentemente

const myElement = document.getElementById('element');

// BONUS - Creare una costante che andrà a collegarsi con le variabili del ciclo
let elementValue = '';

// 1 Creare un ciclo che mi dia numeri in sequenza da 1 a 100
for(let i=1; i<=100; i++){
    // 2. Stampare in Console i numeri del ciclo   
    console.log(i)
    
    //3. Dichiarare una variabile per ogni numero
    let word = '';

    // BONUS Collegare la mia variabile all'interno del ciclo
    elementValue += `<div class="col border p-3">`

    // SE il numero è divisibile per 3 **E ANCHE** per 5
    if((!(i % 3)) && (!(i % 5))){
        //Assegnare valore 'FIZZBUZZ' alla variabile
        word = 'fizzbuzz';
        elementValue += word;
    }
    // SE il numero è divisibile per 3
    else if(!(i % 3)){
        //Assegnare valore 'FIZZ' alla variabile
        word = 'fizz';
        elementValue += word;
    }
    // SE INVECE il numero è divisibile per 5
    else if(!(i % 5)){
        //Assegnare valore 'BUZZ' alla variabile
        word = 'buzz';
        elementValue += word;
    }
    //ALTRIMENTI
    else {
        //assegnare alla variabile lo stesso valore della variabile del ciclo
        word = i;
        elementValue += word;
    }
    
    //4 Stampare il valore della variabile in console
    console.log(word);
    elementValue += '</div>';

}

myElement.innerHTML = elementValue;