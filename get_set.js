'use strict';
function User(fullName) {
    this.fullName = fullName;
    let separate = this.fullName.split(' ');
    Object.defineProperties(this,{
        firstName : {
            get: () => this.firstName = separate[0],
            set: value => {
                separate[0] = value;
                return this.fullName = separate.join(' ');
                }
    
        },
        lastName: {
            get: () => this.lastName = separate[1] ,
            set: value =>   {
                separate[1] = value;
                return this.fullName = separate.join(' ');
                }
    
        }
    });
}

    
let vasya = new User("Петя Петров");
console.log( vasya.firstName ); 
console.log( vasya.lastName ); 
vasya.lastName = 'Сидоров';
console.log( vasya.fullName );
let anon = new User("TheMan WHoSoldTheWorld");
console.log( anon.fullName);
anon.firstName = 'TheWoman';
console.log( anon.fullName); 

