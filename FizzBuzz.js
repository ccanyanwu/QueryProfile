let Fizz = []; 
let Buzz = []; 
let FizzBuzz = []; 
let Other = []; 

for(let i = 1; i <= 200; i++){ 
    if(i % 3 === 0 && i % 5 === 0){ 
        FizzBuzz.push(i); 
    }else if(i % 3 === 0){ 
        Fizz.push(i); 
    }else if(i % 5 === 0){ 
        Buzz.push(i); 
    }else{ 
        Other.push(i); 
    } 
} 
console.log(`Total Number of Fizz = ${Fizz.length}`); //Total Number of Fizz = 53
console.log(`Total Number of Fizz = ${Buzz.length}`); //Total Number of Buzz = 27
console.log(`Total Number of Fizz = ${FizzBuzz.length}`); //Total Number of FizzBuzz = 13
console.log(`Total Number of Fizz = ${Other.length}`); //Total Number of Other = 107
