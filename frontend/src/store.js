import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { roomsAllReducer,
         roomDetailsReducer,
         roomBookDetailReducer,
         roomCreate,
         roomList,
         roomDeleteReducer,
         roomUpdateReducer
       } from './reducers/roomsReducer.js'

import {
      userLoginReducer,
      userDetailsReducer,
      userRegisterReducer,
      } from './reducers/userReducer'


import { bookingListReducer 
      } from './reducers/bookingReducers.js'






const reducer = combineReducers({
      roomsAll: roomsAllReducer,
      roomDetails: roomDetailsReducer,
      userLogin: userLoginReducer,
      userDetails: userDetailsReducer,
      userRegister: userRegisterReducer,

      roomBookdetails: roomBookDetailReducer,

      createRoom: roomCreate,
      listAllRooms: roomList,
      roomDelete: roomDeleteReducer,

      roomUpdate: roomUpdateReducer,
      listAllBookings: bookingListReducer,

})


const userInfoFromStorage = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null

const initialState = {
      userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store