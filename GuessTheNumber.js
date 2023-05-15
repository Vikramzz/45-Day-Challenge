let a = Math.floor(Math.random()*100);
let b = prompt("Enter Your Number");
b = Number.parseInt(b);
var i = 0;
while(a !== b){
    if(b > a){
        b = prompt("Is Grater To Number Try With Less Value");
        b = Number.parseInt(b);
    }
    else{
        b = prompt("Is less To Number Try With Gratter Value");
        b = Number.parseInt(b);
    }
    i += 1 
}
console.log(`Congratulation You Guess The Currect Value Your Score is ${100 - i}`); 