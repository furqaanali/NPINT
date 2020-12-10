import { createStore } from 'redux'
import { parkReducer } from './reducer'
const store = createStore(parkReducer)

export default store