import React from 'react'

const NavBarLink = ( {
	text,
	onClickHandler
}) => {
	return (<div class="nav-bar-link"
							onClick={ onClickHandler }>
		<div class="nav-bar-link-text">
			{ text }
		</div>
	</div>)
}

export default NavBarLink

