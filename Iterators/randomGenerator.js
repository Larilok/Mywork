'use strict';

let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    } ,

    [Symbol.iterator]() {
        let count = 0;

        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;                        //change this parameter to control randomizing
                count++;
                return {value, done};
            }
        }; 
    }
};
let random = randomGenerator.generate(); // generate one random number
console.log(random.next().value);
// console.log(random.next().done);
for(let random of randomGenerator) {     // generate ? random numbers
    console.log(random)
}