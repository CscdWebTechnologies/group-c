import React from 'react';

const Card = props => {
	return (
		<a href="#">
			{props.icon}
			<div>{props.title}</div>
			<div>{props.description}</div>
		</a>
	)
}

export default Card