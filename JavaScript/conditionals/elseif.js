// If you have multiple conditions you want to check, you can use if ... else if ... else to check them one after the other.

let loginCount = 3;
if (loginCount > 10) {
  console.log("That's a lot of logins today, champ! Maybe give it a rest.");
} else if (loginCount > 0) {
  console.log("Thanks for logging in!");
} else {
  console.log("Don't forget to log in today.");
}