/*
The key with this concept is to remember which values JavaScript will coerce to true and which it will coerce to false. The easiest way to remember is to learn the "falsy" values - the ones an if will treat as false.
 */
// Values that evaluate to false
false; // false itself
(""); // empty string
0; // zero
null;
undefined;
NaN; // Not a Number

/*Each of these values gets treated as false if it's in an if statement, or whenever JavaScript is looking for a boolean (like with the ! operator).

Here's another way to think about it: if the value isn't false, "", 0, null, undefined, or NaN, it's coerced to true. In other words, everything else will evaluate to true, even if the value looks "empty" to you. That includes strings with just a space inside them, like " ", as well as negative numbers like -8. Believe it or not, those are both treated as true! */

/*You can force any value to be an actual true or false by using two 'not' operators (!!). This 'double bang' turns anything to a boolean. Let's see some examples:*/

!!true; // true
!!false; // false
!!10; // true
!!0; // false
!!-8; // true
!!"hello"; // true
!!""; // false
!!" "; // true
!!undefined; // false
!!NaN; // false
!!null; // false
