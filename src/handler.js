'use strict';

module.exports.RandomNumberGenerator = event => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The randomly generated integer is:", randomNumber);
  return randomNumber;
};
