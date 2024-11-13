/*When you learned about data types, you used the + operator to add together a string and a number. In that situation, JavaScript converted the number to a string and combined the strings into one.*/

console.log("The temperature is " + 31 + " degrees"); // 'The temperature is 31 degrees')

/*
If you write an if statement with an item that isn't a boolean, JavaScript will behave in a similar way. Specifically, it will convert your data into true or false. */

let weather = "Sunny";

if (weather) {
  console.log("There is weather outside");
}
