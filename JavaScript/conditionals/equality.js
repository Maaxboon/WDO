/*Equality

JavaScript will let you check if two items are equal to each other using the triple equals operator: ===. This is a comparison operator.

Take a look at this example. */

// and (do both sides evaluate to true?)
true && true; // returns true
true && false; // returns false
false && true; // returns false

// or (does either side evaluate to true)
true || true; // returns true
true || false; // returns true
false || false; // returns false

// not (return the reverse)
!true; // false
!false; // true

/*If you try comparing two things with different data types, === will return false.

Note: There's another way to check equality, using the double equals ==. It works differently. If you compare items with different types, it will not necessarily return false. For example, if you try comparing a number to a string, it will attempt to coerce the string into a number. Like this:*/

7 === "7"; // false
7 == "7"; // true

/* The == operator turns the string "7" into the number 7 before checking whether the values are equal. Triple equals (===) is called strict equality checking, because it's predictable and you know what you're working with; it's not loose like ==. Many developers find it easier to stick to ===, because you don't need to think about a data type conversion under the hood. */

// Demo
// A random number from 1 to 6
let random = Math.ceil(Math.random() * 6);

// Try changing the equality checks below
// See the results by running the code
if (random === 1) {
  console.log("The random number was 1");
} else if (random === 2) {
  console.log("The random number was 2");
} else if (random === 6) {
  console.log("The random number was 6");
} else if (random === 6) {
  console.log("The random number was 6");
} else {
  console.log("The random number was not 1, 2, or 6. Unlucky.");
}
