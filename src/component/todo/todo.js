
import React from 'react';
import List   from './list'
import Editor from './editor'

import logo from './logo.svg'

export default function Todo(props) { return (
  <div className="Todo">
    <img src={logo} alt="todoReduction logo"/>
    <Editor/>
    <List/>
  </div> )}
