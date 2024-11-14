// Adding a parameter
/*
Functions can also take parameters---extra information to make them more flexible. For example, you might want to customize the message based on the match situation. Here's how we could add a parameter */

function draw(message) {
  console.log(message);
}

draw("Teams proceed to penalties");
draw("Game ends in a draw");

function team(message) {
  console.log(message);
}
team("Best in the world");
team("Most premier league trophies");
