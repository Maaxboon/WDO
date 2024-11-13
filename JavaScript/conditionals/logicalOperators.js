/*Often, you'll want your code to handle several conditions at once. You'll want it to consider a specific combination of conditions. For example, you might want to check that a user's password is long enough and that their chosen username is available.

In JavaScript, the three logical operators are written as follows: && (and), || (or), and ! (not). Take a look at these examples.*/

let userLoggedIn = true;
let userPurchasedItem = false;

// test if both values are true
userLoggedIn && userPurchasedItem; // => false

// test is either value is true
userLoggedIn || userPurchasedItem; // => true

// invert the value of a variable
!userLoggedIn; // => false
!userPurchasedItem; // => true;

/*When you read the code above, you'll notice several things:

&& evaluates to true if the values on both sides are true.

|| evaluates to true if either one of the values is true.

! works on just one value, and gives the opposite of a value. Therefore, !true evaluates to false, and !false evaluates to true.*/
