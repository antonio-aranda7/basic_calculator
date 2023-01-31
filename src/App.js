import './App.css';
import React, { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import calculate from './logic/calculate';
import styles from './style/Components.module.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleState = (newDigit) => {
    const numbers = /[0-9]/g;
    const dataObject = { total, next, operation };
    const calResult = calculate(dataObject, newDigit);
    /*if (newDigit === 'AC' || newDigit === '%') {
      setNext(calResult.next);
      setOperation(null);
    } else if (newDigit === '+/-') {
      setNext(calResult.next);
    } else if (newDigit === '.') {
      setNext((prevState) => (
        prevState.includes('.') ? prevState : prevState + newDigit
      ));
    } else if (newDigit === '+' || newDigit === '-' || newDigit === 'X' || newDigit === '÷') {
      setNext(calResult.next);
      setTotal(calResult.total);
      setOperation(calResult.operation);
    } else if (newDigit === '=' && dataObject.next && dataObject.total) {
      setNext(calResult.next);
    } else if (newDigit.match(numbers)) {
      setNext((prevState) => (
        prevState === '0' ? newDigit : prevState + newDigit
      ));
    }*/
    switch(newDigit){
      case "AC":
        setNext(calResult.next);
        setOperation(null);
      break;
      case "%":
        setNext(calResult.next);
        setOperation(null);
      break;
      case "+/-":
        setNext(calResult.next);
      break;
      case ".":
        setNext((prevState) => (
          prevState.includes('.') ? prevState : prevState + newDigit
        ));
      break;
      case "+":
        setNext(calResult.next);
        setTotal(calResult.total);
        setOperation(calResult.operation);
      break;
      case "-" :
        setNext(calResult.next);
        setTotal(calResult.total);
        setOperation(calResult.operation);
      break;
      case "X" :
        setNext(calResult.next);
        setTotal(calResult.total);
        setOperation(calResult.operation);
      break;
      case "÷":
        setNext(calResult.next);
        setTotal(calResult.total);
        setOperation(calResult.operation);
      break;
      case "=" ://&& dataObject.next && dataObject.total:
        setNext(calResult.next);
      break;
      case newDigit.match(numbers):
        setNext((prevState) => (
          prevState === '0' ? newDigit : prevState + newDigit
        ));
      break;
      default:
        setNext((prevState) => (
          prevState === '0' ? newDigit : prevState + newDigit
        ));
    }
  };

  return (
    <div className={styles.calContainer}>
      <div className={styles.calculator}>
        <Display status={next} />
        <ButtonPanel grantParentHandleState={handleState} />
      </div>
    </div>
  );
};

export default App;
