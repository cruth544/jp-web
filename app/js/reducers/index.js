import { combineReducers } from 'redux'

import home from './homeReducer'
import route from './routeReducer'

export default combineReducers({
	home,
	route
})

