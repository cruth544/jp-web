import React, { PropTypes } from 'react'
import NavBarLink from './NavBarLink'

const NavBarList = ({
	links,
	onLinkClick
}) => {
	var navLinks = navText.map( ( txt, i ) => {
		return (<li key={ i }>
			<NavBarLink onClickHandler={ onClickHandler }
				text={ txt }
				route={ txt.toLowerCase() }>
			</NavBarLink>
		</li>)
	})

	return (<ul>
		{ navLinks }
	</ul>)
}

NavBarList.propTypes = {
	links: PropTypes.arrayOf( PropTypes.shape({
		text: PropTypes.string.isRequired,
		route: PropTypes.string.isRequired,
		activeStyle: PropTypes.object
	}).isRequired ).isRequired,
	onLinkClick: PropTypes.func.isRequired
}
