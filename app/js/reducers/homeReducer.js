import { TEST, LAST_CLICKED, SET_NAV_LINKS } from 'actions'

export default function reducer( state={
	test: false,
	lastClicked: 'home'
}, action ) {
	switch ( action.type ) {
		case TEST:
			return {
				...state,
				test: action.payload
			}

		case LAST_CLICKED:
			return {
				...state,
				lastClicked: action.payload.toLowerCase()
			}

		case SET_NAV_LINKS:
			return {
				...state,
				navLinks: action.payload
			}

		default:
			return state
	}
}
