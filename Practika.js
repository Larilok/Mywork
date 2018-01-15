let wtvr =0; 
const fun = (...args) => {
	if(args.length % 2 === 0 && args.length !== 0) {
	    for(let value of args){
	            wtvr += value ;
     	        } 
     	 return fun;
	}
	if (args.length % 2 === 1 && args.length !== 0) {
		for(let value of args){
		        wtvr -= value ;
		        } 
	     return fun;
	}
	if(args.length === 0) 
	return wtvr ;
}
console.log(fun(4,5,9)(141,18)());
// (new Date().toLocaleString('ru', {
// 	weekday: 'long',
// 	year:    'numeric',
// 	month:   'long',
// 	day:     'numeric',
// 	hour:    'numeric',
// 	minute:  'numeric',
// 	second:  '2-digit',
//   })); 

// const args = [1,2,3];
// const a = () => {for(let value of args){
// 			wtvr -= value ;
// 			} 
// 	 return wtvr;
// 		}
// console.log(a);