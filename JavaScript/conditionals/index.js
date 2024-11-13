// Hour
// if hour is between 6am and 12pm: good morning!
// If hour is between 12pm and 6pm: good afternoon!
// Otherwise: good evening!

// block of code
/* if (condition){
    statement
}
else if (anotherCondition) {
    statement
}
else if (yetAnotherCondition) {
    statement
}
else
    statement */

// declare a variable
let hour = 19;

if (hour >= 6 && hour < 12) console.log("Good morning!");
else if (hour >= 12 && hour < 18) console.log("Good afternoon!");
else console.log("Good evening!");
