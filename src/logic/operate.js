import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let bigNumOne;
  let bigNumTwo;
  if (numberOne !== null && numberTwo !== null) {
    bigNumOne = new Big(numberOne);
    bigNumTwo = new Big(numberTwo);
  }
  /*if (operation === '-') return bigNumOne.minus(bigNumTwo).toString();
  if (operation === '+') return bigNumOne.plus(bigNumTwo).toString();
  if (operation === 'X') return bigNumOne.times(bigNumTwo).toString();
  if (operation === '÷' && numberTwo !== '0') return bigNumOne.div(bigNumTwo).toString();*/

  let result;
  switch(operation){
    case "-" : 
      result = Big(bigNumOne.minus(bigNumTwo));
    break;
    case "+" :
      result = Big(bigNumOne.plus(bigNumTwo));
    break;
    case "X" :
      result = Big(bigNumOne.times(bigNumTwo));
    break;
    case "÷" : //if (operation === '÷' && numberTwo !== '0')
      result = Big(bigNumOne.div(bigNumTwo)); 
    break;
    default:
      return operation;
  }

  return result.toString();
};

export default operate;
