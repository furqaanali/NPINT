import { ParkData } from "../../api/types"
import { combineReducers } from 'redux'
export const parkReducer = (_state, action) => {
    switch(action.type) {
        default:
            return {...action.payload}
    }
}

export default combineReducers({
    parks: parkReducer
})