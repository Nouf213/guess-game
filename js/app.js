'use strict';

let loveswim = prompt('Do i love swimming?y/yes','yes').toLowerCase();
//console.log(loveswim);
if (loveswim!=='yes') {
//console.log('wrong answer')
  alert('wrong answer');
}
else{
//console.log('hell yeaa')
  alert('hell yeaa');
}


let dive = prompt('Have i ever dive? y/yes','no').toLowerCase();
//console.log(dive);
if (dive==='no') {
  alert('never in my life');
} else {
  alert('wrong answer');
}

let likedive = prompt('Do i like diving?y/yes','no').toLowerCase();
//console.log(likedive);
if (likedive!=='no') {
  alert('yes i dont like diving');
} else {
  alert('you dont know me well!!');
}

let divesuit = prompt('Have i ever wore a diving suit?y/yes','yes').toLowerCase();
//console.log(divesuit);
if (divesuit==='no') {
  alert('haha! tricky question. nooo?');
} else {
  alert('comfiest thing ever');
}

let Coral = prompt('Do i like Coral?y/yes','yes').toLowerCase();
//console.log(Coral);
if (Coral!=='yes') {
  alert('why i would not like them');
} else {
  alert('yess, it is full of colors');
}

let yourname=prompt ('enter your name');
function printGreeting(nome)
{
  alert('Welcome'+' '+ nome);
}

printGreeting (yourname);

let Age = prompt('please enter your age?');
console.log(Age);


Age = 20, 25, 30, 60;

switch (Age) {
case 25:
  console.log('Your age is', Age, 'your course is bubble');
  break;
case 20:
  console.log(Age ,'your course is open water');
  break;

case 30:
  console.log('Your age is', Age , 'your course is rescue diver');
  break;
case 60:
  console.log('Your age is', Age, 'your course is instructor diver');
  break;
default:
  console.log('You are not allowed');
  break;
}


printGreeting (yourname);
