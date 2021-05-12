import React from 'react';

import coinbase_icon from '../assets/svg/coinbase-icon.svg';

const Card = props => {
	const hasIcon = !('icon' in props && props.icon == undefined);
	const hasDescription = !('description' in props && props.description == undefined);

	return (
		<a
			className="inline-flex"
			style={{minWidth: '145px'}}
			href="#"
		>
			{hasIcon ?
				<img className="CardIcon mr-4" src={coinbase_icon} alt="icon" height="40" width="40" /> :
				<svg className="mt-1 mr-5 hover:text-blue-primary" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
				</svg>
			}
			<div
				className="group flex flex-col"
				style={{maxWidth: '316px'}}
			>
				<h4 className="font-medium group-hover:text-blue-primary">
					{props.title}
				</h4>
				{hasDescription &&
					<p className="font-light text-gray-500 group-hover:text-current">
						{props.description}
					</p>
				}
			</div>
		</a>
	)
}

export default Card