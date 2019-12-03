
import React from 'react';

import Display from './display';
import Keypad  from './keypad';

const Calculator = (props)=> {
  return (
    <>
      <Display/>
      <Keypad/>
    </>
  );
}

export default Calculator;
