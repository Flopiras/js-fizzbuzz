console.log('js ok')


// 1 Creare un ciclo che mi dia numeri in sequenza da 1 a 100
for(let i=0; i<100; i++){
    // 2. Stampare in Console i numeri del ciclo   
    //console.log(i)
    
    //3. Dichiarare una variabile per ogni numero
    let word = '';

    // SE il numero è divisibile per 3 **E ANCHE** per 5
    if((!(i % 3)) && (!(i % 5))){
        //Assegnare valore 'FIZZBUZZ' alla variabile
        word = 'fizzbuzz';
    }
    // SE il numero è divisibile per 3
    else if(!(i % 3)){
        //Assegnare valore 'FIZZ' alla variabile
        word = 'fizz';
    }
    // SE INVECE il numero è divisibile per 5
    else if(!(i % 5)){
        //Assegnare valore 'BUZZ' alla variabile
        word = 'buzz';
    }
    //ALTRIMENTI
    else {
        //assegnare alla variabile lo stesso valore della variabile del ciclo
        word = i;
    }
    
    //4 Stampare il valore della variabile in console
    console.log(word);

}

