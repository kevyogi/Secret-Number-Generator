'use strict';
module.exports = function() {
  var mySecretNumber = Math.floor(Math.random()*1000001)
  return function (){
    return mySecretNumber;
  }
};

