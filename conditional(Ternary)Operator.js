// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original


let country = "India";
let population = 1430341556;

let populationCount = population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(populationCount);

population = 13000000;
populationCount = population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(populationCount);

population = 1300000000;
populationCount = population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(populationCount);