
import React from 'react';
import { connect }   from 'react-redux'
import { Button } from 'react-bootstrap'

const Keypad = (props)=> {
  console.log(props);
  let {dispatch} = props
  const click = e => {
    dispatch({type:'INPUT',value:e.target.value})
  }
  const layout = [
    1,2,3,'+',
    4,5,6,'-',
    7,8,9,'*',
    0,'/','=','<'
  ];
  return (
    <div>
    { layout.map( key => { return (
        <Button value={key} onClick={click}>{key}</Button>
    ) } ) }
    </div>
  );
}

export default connect( ({calc,mode}) => {
  let {formula} = calc;
  return { formula, mode }
})(Keypad);
