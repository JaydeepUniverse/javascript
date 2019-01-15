// IF Statement
var hot = false;
var temp = 80;
if (temp > 80) {
  hot = true;
}
console.log(hot);

temp = 100;
if (temp > 80) {
  hot = true;
}
console.log(hot);

temp = 30;
if(temp > 90){
  console.log("Hot outside");
}else {
  console.log("Its not too hot today!");
}

temp = 5;
if (temp > 80) {
  console.log("Hot outside!");
}else if (temp <= 80 && temp >= 50) {
  console.log("Nice outside!");
}else if (temp <= 50 && temp >= 32) {
  console.log("Its cooler outside!");
}else {
  console.log("Its really cold outside!");
}

var ganthiya = 10;
var jalebi = 10;
var report = "blank";
if (ganthiya >= 10 && jalebi >= 10) {
  report = "Strong sales of both items";
}else if (ganthiya === 0 && jalebi === 0) {
  report = "Nothing sold!";
}else {
  report = "We had some sales";
}
console.log(report);

// WHILE Statement
var evenNumber = 1;
while (evenNumber <= 10) {
  if (evenNumber%2 === 0) {
    //console.log(x);
    console.log(evenNumber);
  }
  evenNumber = evenNumber + 1;
}

// FOR Statement
for (var i = 0; i < 5; i++) {
  console.log("For loop, i is " + i);
}

var word = "ABCDEFGHJK";
for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}

var word2 = "ABABABABAB"
for (var i = 0; i < word2.length; i=i+2) {
  console.log(word2[i]);
}

// Print (console.log()) out the word "hello" 5 times.
// Do this with a While Loop and a For Loop

// While Loop
var i=0;
while (i<5) {
  console.log("hello in while loop");
  i++;
}
// For Loop
for (var i = 0; i < 5; i++) {
  console.log("hello in for loop");
}

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var i = 1;
while (i<=25) {
  if (i%2 !== 0) {
    console.log(i);
  }
  i = i+1;
}

// METHOD TWO
// For Loop
for (var i = 0; i <= 25 ; i++) {
  if (i%2 !== 0) {
    console.log(i);
  }
}
