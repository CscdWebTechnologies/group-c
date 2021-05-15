import React from 'react';

const Button = props => {
  return (
    <button
			className="bg-blue-primary text-white font-medium whitespace-nowrap rounded-sm text-sm py-3 px-4"
			style={{width: 'fit-content'}}
		>
			{props.value}
		</button>
  )
}

export default Button
