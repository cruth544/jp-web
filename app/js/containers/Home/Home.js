import React from 'react'
//import axios from 'axios'

import NavBar from 'containers/NavBar/NavBar'
require( './Home.scss' )

const URL = ''

export default class Home extends React.Component {
	constructor( props ) {
		super( props )
	}

	componentDidMount() {
		console.log( 'mounted home' )
	}

	render() {
		const { store } = this.context
		return (<div>
				<NavBar></NavBar>
				<h1 class="home-header">{ store.lastClicked }!</h1>
		</div>)
	}
}
Home.contextTypes = {
	store: React.PropTypes.object
}
