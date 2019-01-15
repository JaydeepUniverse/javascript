var firstName = prompt("What is your First Name?");
var lastName = prompt("What is your Last Name?");
var ageString = prompt("What is Age?");
var ageInt;
var heightString = prompt("What is your height in centimeters?");
var heightInt;
var petName = prompt("What is your Pet's Name?");

console.log(firstName);
console.log(lastName);
ageInt = parseInt(ageString, 10);
console.log(ageInt);
heightInt = parseInt(heightString, 10);
console.log(heightInt);
console.log(petName);

if (Number.isInteger(ageInt) && Number.isInteger(heightInt)) {
  if (firstName[0] !== lastName[0]) {
    console.log("Firstname's and Lastname's first character is not matching");
  }else if (ageInt < 20 || ageInt > 30) {
    console.log("Age must be between 21 to 30");
  }else if (heightInt < 170) {
    console.log("Height must be above 170");
  }else if (petName[petName.length - 1] !== "y") {
    console.log("Petname's last character must be y");
  }else {
    console.log("Welcome Comrade! You've passed the Spy Test");
    alert("Thank you so much for information!")
  }
}else {
    console.log("Enter proper details");
}
