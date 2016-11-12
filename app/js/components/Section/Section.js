import React from 'react'

export default class Section extends React.Component {
	constructor( props ) {
		super( props )
	}

	render() {
		return (<div class="section-wrapper">
			{ this.props.content }
		</div>)
	}
}


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

export default ({
	classes,
	buttonText,
	onClickHandler
}) => {
	return (<div class="">

	</div>)
}
