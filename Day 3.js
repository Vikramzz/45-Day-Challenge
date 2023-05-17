
// eligiblity for driving

let a = prompt("Enter your age");
a = Number.parseInt(a);
if(a<18){
  alert("You Can't DRIVE");
}
else{
  alert("You Can DRIVE");
}
let Again = confirm("Do you want to play again");

while(Again){
  let a = prompt("Enter your age");
a = Number.parseInt(a);
if(a<18){
  alert("You Can't DRIVE");
}
else{
  alert("You Can DRIVE");
}
  Again = confirm("Do you want to play again");
}
