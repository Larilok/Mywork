'use strict';
let arr = [1,2,3,4,5]
console.log(arr.reduce((a,b) => {
    console.log(`a '${a} ${b}'`);
    console.log('BOOM ' + Math.pow(a,b));
    return Math.pow(a,b);
    }));