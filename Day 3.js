
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
