import { combineReducers } from 'redux'
import addition from './addition'
import additionStatus from './additionStatus'
import multiplication from './multiplication'
import multiplicationStatus from './multiplicationStatus'

const calcApp = combineReducers({
  addition,
  additionStatus,
  multiplication,
  multiplicationStatus
})

export default calcApp
