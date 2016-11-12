import React from 'react'
import { connect } from 'react-redux'
require( './NavBar.scss' )

import NavBarList from 'components/NavBar/NavBarList'

import { TEST, LAST_CLICKED, SET_NAV_LINKS } from 'actions'

const mapStateToProps = ( state, ownProps ) => {
	return {
		navLinks: state.home.navLinks
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		onClickHandler: ( e ) => {
			console.log( 'clicked: ', e.target )
			dispatch({
				type: LAST_CLICKED,
				lastClicked: e.target.innerHtml
			})
		}
	}
}

export default class NavBar extends React.Component {
	constructor( props ) {
		super( props )
	}

	unsubscribe() {
		console.log( 'unsubscribe' )
	}

	componentDidMount() {
		console.log( 'mounted NavBar' )

		const { store } = this.context
		console.log( store )
		store.dispatch({
			type: TEST,
			payload: true
		})

		store.dispatch({
			type: SET_NAV_LINKS,
			payload: [
				'Home',
				'About',
				'Date',
				'Contact'
			]
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	render() {
		const { store } = this.context
		const state = store.getState();
		console.log( 'state: ', state )
		const onClickHandler = ( e ) => {
			console.log( 'clicked: ', e.target )
			store.dispatch({
				type: LAST_CLICKED,
				payload: e.target.innerHtml
			})
		}

		const NavList = connect(
			mapStateToProps,
			mapDispatchToProps
		)( NavBarList )
		return (<div class="nav-bar">
			<h1>NavBar</h1>
			{ NavList }
		</div>)
	}
}

NavBar.contextTypes = {
	store: React.PropTypes.object
}
