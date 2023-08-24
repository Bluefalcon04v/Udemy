// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' 
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original


let population = 1430341556;
let country = "India";              
let comparingPopulation = 133000000;

if(population > comparingPopulation){
    console.log(`${country}'s population is above average`);
} else{
    console.log(`${country}'s population is ${comparingPopulation - population} below average`);
};