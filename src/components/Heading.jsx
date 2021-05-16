import React from 'react';

const Heading = props => {
	return (
		<>
			<h2 className="mb-6 text-4xl font-semibold text-center">
				{props.title}
			</h2>
			<p className="text-center font-light text-gray-600">
				{props.subTitle}
			</p>
		</>
	)
}

export default Heading