console.log('js ok')


// 1 Creare un ciclo che mi dia numeri in sequenza da 1 a 100
for(let i=0; i<100; i++){
    
    let word = '';
    // 2. Stampare in Console i numeri del ciclo   
   // console.log(i);

    // SE INVECE il numero è divisibile per 3 E ANCHE per 5 deve apparire FIZZBUZZ
    if((!(i % 3)) && (!(i % 5))){
        word = 'fizzbuzz';

    }
    // SE il numero è divisibile per 3 deve apparire FIZZ
    else if(!(i % 3)){
        word = 'fizz';

    }
    // SE INVECE il numero è divisibile per 5 deve apparire BUZZ
    else if(!(i % 5)){
        word = 'buzz';
    }
    
    console.log(word);

}

