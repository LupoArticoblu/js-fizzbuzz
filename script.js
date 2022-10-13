//scrivere un programma che riporti in console dei numeri da 1 a 100;

/*for( i = 1; i <= 100; i++){
  console.log(i);
};*/

//scrivere "fizz" ogni volta che abbiamo un multiplo di 3; "Buzz" se si presenta un multiplo di 5; "FizzBuzz" se è multiplo sia di 3 che di 5;

for( i = 1; i <= 100; i++){
  
  if((i % 3 === 0) && (i % 5 === 0)){
    console.log("FizzBuzz");
  
  
  }else if(i % 3 === 0){
    console.log("Fizz");
  
  
  }else if(i % 5 === 0){
    console.log("Buzz");
  
  
  }else{
    console.log(i);
  }
};

