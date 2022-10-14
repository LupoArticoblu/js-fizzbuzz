//scrivere un programma che riporti in console dei numeri da 1 a 100;

/*for( i = 1; i <= 100; i++){
  console.log(i);
};*/

const container = document.querySelector('.container');


//scrivere "fizz" ogni volta che abbiamo un multiplo di 3; "Buzz" se si presenta un multiplo di 5; "FizzBuzz" se è multiplo sia di 3 che di 5;

for( i = 1; i <= 100; i++){
  
  if((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz");
  
    //questo crea un elemento
    const x = document.createElement('div');

    //questo aggiunge la/le classe/i all'elemento creato
    x.className = 'box';
    x.classList.add('FizzBuzz');

    //aggiungo all'Html e all'elemento genitore
    x.innerHTML = i;
    

  }else if(i % 3 === 0){
    console.log("Fizz");
    x.innerHTML ="Fizz";
  
  }else if(i % 5 === 0){
    console.log("Buzz");
    x.innerHTML = "Buzz";
  
  }else{
    console.log(i);
    x.innerHTML = i;
  }
};

