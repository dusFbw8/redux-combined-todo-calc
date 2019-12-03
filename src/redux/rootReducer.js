
import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import calcReducer from './calcReducer'

const rootReducer = combineReducers({
  todo:todoReducer,
  calc:calcReducer
},{calc:{},todo:{}});

export default rootReducer;
