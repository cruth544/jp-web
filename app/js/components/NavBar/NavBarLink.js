import React from 'react'
import { Link } from 'react-router'

const NavBarLink = ( {
	text,
	route,
	activeStyle,
	onClickHandler
}) => {
	return (<Link
		to={ route === 'home' ? '' : route }
		onClick={ onClickHandler }
		activeStyle={ activeStyle || {
			textDecoration: 'none',
			color: 'red'
		}}>
		{ text }
	</Link>)

	// return (<div class="nav-bar-link"
	// 						onClick={ onClickHandler }>
	// 	<div class="nav-bar-link-text">
	// 		{ text }
	// 	</div>
	// </div>)
}

export default NavBarLink
