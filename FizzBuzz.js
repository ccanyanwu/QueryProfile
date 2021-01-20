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
console.log(`Total Number of Fizz = ${Fizz.length}`); 
console.log(`Total Number of Fizz = ${Buzz.length}`);
console.log(`Total Number of Fizz = ${FizzBuzz.length}`);
console.log(`Total Number of Fizz = ${Other.length}`); 