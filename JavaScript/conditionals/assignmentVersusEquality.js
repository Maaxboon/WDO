// assignment (one equals sign)
let currentForecast = "Rainy";

// Equality comparison (three equal signs)
if (currentForecast === "rain") {
  let recommendation = "Bring your umbrella ☔";
}

// Mistake alert!
// Only one equals sign,
// means that this assigns 'rain' to currentForecast

// instead of triple equals
// which would check if currentForecast is set to 'rain'
if ((currentForecast = "rain")) {
  let recommendation = "Bring your umbrella";
}
