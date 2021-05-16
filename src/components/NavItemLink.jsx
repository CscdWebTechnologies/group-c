import React from 'react';


const NavItemLink = props => {
	const hasIcon = !('icon' in props && props.icon == undefined);
	const hasDescription = !('description' in props && props.description == undefined);

	return (
		<a className="lg:inline-flex" style={{minWidth: '145px'}} href="#">
			{hasIcon ?
				<img
					className="hidden lg:block NavLinkIcon mr-4"
					src="https://images.ctfassets.net/q5ulk4bp65r7/1VeWI2Rpj7YCnzeKoPpsMX/419fa422554e8fa3a9ec301eaa90dcfd/round-wallet.svg"
					alt="icon"
					height="40"
					width="40"
				/> :
				<svg className="hidden lg:block mt-1 mr-5 hover:text-blue-primary" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
				</svg>
			}
			<div
				className="py-5 px-6 lg:p-0 lg:group lg:flex lg:flex-col lg:max-w-sm"
			>
				<h4 className="text-sm font-light lg:text-base lg:font-medium lg:group-hover:text-blue-primary">
					{props.title}
				</h4>
				{hasDescription &&
					<p className="hidden lg:block font-light text-gray-500 group-hover:text-current">
						{props.description}
					</p>
				}
			</div>
		</a>
	)
}

export default NavItemLink