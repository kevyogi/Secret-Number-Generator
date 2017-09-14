'use strict';
module.exports = function() {
  var mySecretNumber = Math.floor(Math.random()*1000000 + 1)
  return function (){
    return mySecretNumber;
  }
};

