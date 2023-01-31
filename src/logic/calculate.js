import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = { ...data };
  //const operations = ['+', '-', 'X', '÷'];

  /*if (buttonName === '+/-') newData.next = (parseFloat(newData.next) * (-1.0)).toString();
  if (buttonName === 'AC') newData.next = '0';
  if (buttonName === '%') newData.next /= 100;
  if (operations.includes(buttonName)) 
  {
    newData.total = newData.next;
    newData.next = '0';
    newData.operation = buttonName;
  } else 
  if (buttonName === '=') {
    newData.next = operate(newData.total, newData.next, newData.operation);
    newData.total = newData.next;
  }*/

  switch (buttonName){
    case "+/-":
      newData.next = (parseFloat(newData.next) * (-1.0)).toString();
    break;
    case "AC":
      newData.next = '0';
    break;
    case "%":
      newData.next /= 100;
    break;
    case "=":
      newData.next = operate(newData.total, newData.next, newData.operation);
      newData.total = newData.next;
    break;
    default:
      newData.total = newData.next;
      newData.next = '0';
      newData.operation = buttonName; 
  }

  return newData;
};

export default calculate;
