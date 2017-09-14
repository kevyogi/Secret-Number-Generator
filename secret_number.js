'use strict';
module.exports = function() {
  var mySecretNumber;
  return function (){
    if(mySecretNumber === undefined){
      mySecretNumber = Math.floor(Math.random()*1000000);
    }
    return mySecretNumber;
  }
};

