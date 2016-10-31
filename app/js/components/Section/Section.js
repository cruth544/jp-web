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

