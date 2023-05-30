console.log('js ok')

let number = '';

// 1 Creare un ciclo che mi dia numeri in sequenza da 1 a 100
for(let i=0; i<100; i++){
    
// 2. Stampare in Console i numeri del ciclo   
    console.log(i);

    // SE il numero è divisibile per 3 deve apparire FIZZ
    if(!(i % 3)){
        number = 'fizz';
        console.log(number);
    }
    // SE INVECE il numero è divisibile per 5 deve apparire BUZZ
    else if(!(i % 5)){
        number = 'buzz';
        console.log(number);
    }
    // SE INVECE il numero è divisibile per 3 **E ANCHE** per 5 deve apparire FIZZBUZZ
    else if(!(i % 3) && !(i % 5)){
        number = 'fizzbuzz';
        console.log(number);
    }
}

