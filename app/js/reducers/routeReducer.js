export default function reducer( state={
	test: false
}, action ) {
	switch ( action.type ) {
		case "ROUTE_TEST":
			return {
				...state,
				test: false
			}
		default:
			return state
	}
}
