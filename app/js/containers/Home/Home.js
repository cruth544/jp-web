import React from 'react';
//import axios from 'axios';

const URL = '';

export default class Home extends React.Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		console.log( 'mounted home' );
	}

	render() {
		return (<div>
				<h1 class="home-header">Home!</h1>
		</div>);
	}
}
