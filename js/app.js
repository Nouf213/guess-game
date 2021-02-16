'use strict';

let yourname=prompt ('enter your name');
function printGreeting(nome)
{
  alert('Welcome'+' '+ nome);
}
printGreeting (yourname);

let loveswim = prompt('Do i love swimming?y/yes').toLowerCase();
//console.log(loveswim);
if ((loveswim!=='yes' || loveswim!=='y') && (loveswim!=='n'|| loveswim!=='no')&&loveswim==='') {
//console.log('invalid answer')

  alert('invalid answer');
  loveswim=prompt('Do i love swimming?y/yes');
}
else{
  if(loveswim==='y'|| loveswim==='yes')
  //console.log('hell yeaa')
    alert('hell yeaa');
  else
  {
    if(loveswim==='n' || loveswim==='no')
      alert('wrong answer');
  }
}


let dive = prompt('Have i ever dive? y/yes').toLowerCase();
//console.log(dive);
if ((dive!=='yes' || dive!=='y') && (dive!=='n'|| dive!=='no')||dive==='') {
  //console.log('invalid answer')
  alert('invalid answer');
  dive=prompt('Have i ever dive?y/yes');
}
else{
  if (dive==='no' || dive==='n') {
    alert('never in my life');
  } else {
    if (dive==='yes' || dive ==='y')
      alert('wrong answer');
  }
}
let likedive = prompt('Do i like diving?y/yes').toLowerCase();
//console.log(likedive);
if ((likedive!=='yes' || likedive!=='y') && (likedive!=='n'|| likedive!=='no')|| likedive==='') {
  //console.log('invalid answer')
  alert('invalid answer');
  likedive=prompt('Do i like diving?y/yes');
}
if (likedive==='no'|| likedive==='n') {
  alert('yes i dont like diving');
} else {
  if(likedive==='y'||likedive==='yes')
    alert('you dont know me well!!');
}

let divesuit = prompt('Have i ever wore a diving suit?y/yes').toLowerCase();
//console.log(divesuit);
if ((divesuit!=='yes' || divesuit!=='y') && (divesuit!=='n'|| divesuit!=='no')|| divesuit==='') {
  //console.log('invalid answer')
  alert('invalid answer');
  divesuit=prompt('Have i ever wore a diving suit?y/yes');
}
if (divesuit==='no'||divesuit==='n') {
  alert('haha! tricky question. nooo?');
} else {
  if(divesuit==='y'||divesuit==='yes')
    alert('comfiest thing ever');
}

let Coral = prompt('Do i like Coral?y/yes').toLowerCase();
//console.log(Coral);
if ((Coral!=='yes' || Coral!=='y') && (Coral!=='n'|| Coral!=='no')||Coral==='') {
  //console.log('invalid answer')
  alert('invalid answer');
  Coral=prompt('Do i like Coral?y/yes');
}
if (Coral==='no'|| Coral==='n') {
  alert('why i would not like them');
} else {
  if(Coral==='yes'||Coral==='y')
    alert('yess, it is full of colors');
}

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


printGreeting ('goodbyeee'+' '+yourname);
