'use strict';

let arr_ = ['hello',['1', 2, [false, () => {}], ['yes','no']]];
let wtv  = 0;

const UnfoldArray = (inpArr) => {
    wtv++;
    return inpArr.reduce((flat, toFlatten) => {
       return flat.concat(Array.isArray(toFlatten) ? UnfoldArray(toFlatten) : toFlatten )
    },[]);
};
var flattenReduceArray = (result, item) => Array.isArray(item) ? item.reduce(flattenReduceArray, result) : [...result, item]
let [a,b,c,d,e,f,g] = UnfoldArray(arr_);

console.log(UnfoldArray(arr_));
console.log(wtv);
console.log(e,b);
console.log(flattenReduceArray([],arr_));
