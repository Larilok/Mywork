'use strict';
const generateKey = args => (
args.map(x => x.toString()+ ':' + typeof(x)).join('|')
);
const memoize = (fn) => {
    let cache ={};
    return(...args) => {
        const key = generateKey(args);
        const val = cache[key];
        if(val) {
            console.log('dick', key);
            return val;
        }
        console.log('pussy', key);
        const res = fn(...args);
        cache[key] = res;
        return res;
    };
};
const factorial = memoize(
    (x) => {
      if (x === 0) {
        return 1;
      }
      else {
        return x * factorial(x - 1);
      }
    }
  );
  console.log(factorial(5));
  console.log(factorial(6));