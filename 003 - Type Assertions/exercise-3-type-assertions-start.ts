/**
 * START: Follow the instructions below.
 */

function getPopulation(): number {
    return 69_950_850;
}

// Add a type assertion after the call to `getPopulation()`.
// Hint: What's the actual type of the value returned by `getPopulation()`?

const population: number = getPopulation() as number;

// Now you've added a type assertion, there's a type error in the code below.
// Remove the code that is incorrect.

// console.log(population.toUpperCase()); the property "toUpperCase" doesn't exists for the type "number"

console.log(population * 2);

// ----

export { };
