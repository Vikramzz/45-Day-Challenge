
// eligiblity for driving

let a = prompt("Enter your age");
a = Number.parseInt(a);
if(a<18 && a>0){
  alert("You Can't DRIVE");
}
else if(a<0){
  console.error("You entered wrong Age");
}
else{
  alert("You Can DRIVE");
}
let Again = confirm("Do you want to play again");

while(Again){
  let a = prompt("Enter your age");
a = Number.parseInt(a);
if(a<18 && a>0){
  alert("You Can't DRIVE");
}
else if(a<0){
  console.error("You entered wrong Age");
  break;
}
else{
  alert("You Can DRIVE");
}
  Again = confirm("Do you want to play again");
}

// Changing location 
let a = prompt("enter a number");
a = Number.parseInt(a);
if(a>4){
  location.href = "https://www.google.com/";
} 
// Background Color Change By User Input
let a = prompt("enter color name")
document.body.style.background = a;
