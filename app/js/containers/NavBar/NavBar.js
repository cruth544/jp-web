import React from 'react'

import NavBarLink from 'components/NavBarLink/NavBarLink'


export default class NavBar extends React.Component {
	constructor( props ) {
		super( props )
	}

	componentDidMount() {
		console.log( 'mounted NavBar' )
	}

	render() {
		const onClickHandler = ( e ) => {
			console.log( 'clicked: ', e.target )
		}
		const navText = [
			'Home',
			'About',
			'Date',
			'Contact'
		]

		var navLinks = navText.map( ( txt, i ) => {
			return (<li key={ i }>
				<NavBarLink onClickHandler={ onClickHandler }
					text={ txt }>
					{ txt }
				</NavBarLink>
			</li>)
		})
		return (<div class="nav-bar">
			<h1>NavBar</h1>
			<ul>
				{ navLinks }
			</ul>
		</div>)
	}
}

