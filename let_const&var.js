// 1. Set the value of 'language' to the language spoken where you live (some
//     countries have multiple languages, but just choose one)
//2. Think about which variables should be const variables (which values will never
//     change, and which might change?). Then, change these variables to const.
//3. Try to change one of the changed variables now, and observe what happens

const isIsland = false;
const country = "India";
const continent = "Asia";
let population = 1430341556;
const language = "Hindi";


console.log(isIsland);
console.log(country);
console.log(continent); 
console.log(population);
console.log(language);


population = 2430341556;
language = "English";   // it will give an error message because const doesn't support changing

console.log(isIsland);
console.log(country);
console.log(continent); 
console.log(population);
console.log(language);
