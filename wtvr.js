// (function (foo) {
// 	//arguments[0] = 42;
// 	console.log(foo); // 42!
	
// 	foo = 20;
// 	console.log(arguments[0]); // 20
// })(5);
function partial(fn /*, args...*/) {
    // A reference to the Array#slice method.
    const slice = Array.prototype.slice;
    // Convert arguments object to an array, removing the first argument
    const args = slice.call(arguments, 1);
    console.log(args.concat(slice.call(arguments, 0)));

    return function() {
    // Invoke the originally-specified function, passing in all originally-
    // specified arguments, followed by any just-specified arguments.
    return fn.apply(this, args.concat(slice.call(arguments, 0)));
    };
    } 
let sum = 0;
const addAll = (...args) => {
    for(let i of args)
    sum += i;
    return sum;
}
const add12 = partial(addAll,6,6);
console.log(add12(8));
`Геополітичні фактори в житті українскьго етносу до ХХ ст`
`"Українське питання" в європейській політиці напередодні Першої та Другої Світових воєн`
`Зовнішня політика України після проголошення незалежності`
`Національна геополітична стратегія України в контексті глобалізації.`