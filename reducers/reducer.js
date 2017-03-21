import { NavigationReducer } from '@expo/ex-navigation'
import checks from './checks'
import { combineReducers } from 'redux'


export default combineReducers({
  navigation: NavigationReducer,
  checks
})
