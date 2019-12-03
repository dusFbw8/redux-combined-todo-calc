
import React from 'react';
import Calculator  from './component/calc/calculator';
import Todo        from './component/todo/todo';
import { connect } from 'react-redux'

function App({mode}) {
  return mode === 'todo' ? <Todo/> : <Calculator/>;
}

export default connect(({mode})=>{return {mode:mode}})(App);
