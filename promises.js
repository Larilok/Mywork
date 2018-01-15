'use strict';

let docs = {name: 'Dude', city: 'Paradice City'};

// promise states:
// pending - ожидание
// resolve
// reject

function applyForVisa(documents){
 console.log("Preparing to process request\n");
 let promise = new Promise(function(resolve,reject){

    setTimeout(function(){// artificial delay
     console.log("Processing request.......\n");

     Math.random() > 0.5 ? resolve(docs) : reject(" Visa request rejected, need more documents\n");
     // console.log(promise);
    }, 2000);

  });

  return promise;
      
 }

function getVisa(visa){
//  console.log(visa);   
 visa.visa = "Tourist visa for fictional USA";
 console.info("Visa aquired--->")
 return visa;
}

function bookHotel(visa){
 console.info(visa);
 visa.hotel = 'Machete Resort & Spa';
 console.log("Booking hotel room ... \n");
 return visa;
}

function buyTickets(booking){
 console.log("Getting tickets ... \n");
 booking.ticket = 'San Andreas, SA'
 console.log("Booking ----->");
 console.log(booking);

}


applyForVisa(docs)
    .then(getVisa) 
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error + '<------'))
    .then(() => console.info("since every promice is beeing executed only once(every .then() returns new promise for the next one to work with, and we return promise in applyForVisa() function to start the  promice chain ), we can do this to act further even when one promice returns reject (promise chain)"));



console.log('BAZINGAAA! thanks to non blocking code this is beeing printed out before the code above is done with it\'s thing, so we do not need to wait to see this message' );

function punch(){
 let pr = new Promise(function(res,rej){
  setTimeout(function(){
   console.log('_KAPONGO!_');
   res();
  },4000);
 });
 return pr;
}


function prdrdr(){
 // let pr = new Promise(function(res,rej){
  
   console.log('_KA-BOOM!_');
  // resolve()
 // });
}

punch()//доказательство того, что любой код вне промисов выполнится до того, как выполнится код внутри промисов
  .then(prdrdr);// стоит заметить, что порядок выполнения двух отдельный цепочек промисов зависит от времени их выполнения/ задержки
  // это значит, что считай нельзя делать так, чтобы работа одной из двух отдельных цепочек промисов зависела от результата работы другой, если оно так сильно надо, то 
  // можно просто все, что надо изначально делать в одной цепочке или соединить их в  цепочку, убрав создание промиса из начальной функции присоединяемой, и закинув эту самую начальную функцию присоединяемой цепочки в then()(или catch(), кому что надо)﻿