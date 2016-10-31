import React from 'react';
const Button = ({
		classes,
		buttonText,
		onClickHandler
}) => {
	return (<div>
		<button class={ classes +' ' }
			onClick={ onClickHandler }>
			{ buttonText }</button>
		</div>)
}

export default Button

