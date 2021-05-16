import React from 'react';

import logo from '../static/logo.svg';

const Footer = () => {
	return (
		<footer
			className="flex flex-shrink-0 w-full mx-auto py-24 px-6 bg-white"
			style={{maxWidth: '1180px'}}
		>
			<div className="w-full">
				<div className="md:grid w-full" style={{gridTemplateColumns: '1fr 2fr'}}>
					<div className="flex flex-col px-2 mb-8">
						<div className="w-52">
							<img
								className="block mb-8"
								src={logo}
								height="20"
								width="112"
								alt="Logo"
								style={{height: '20px'}}
							/>
							<select className="p-1 font-light rounded-sm border w-full md:mr-4" name="" id="">
								<option value="en">English</option>
							</select>
							<div className="mt-4 mb-2 text-gray-500 font-light">&copy; 2021 Coinbase</div>
							<div className="text-gray-500 font-light">Blog | Twitter | Facebook</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer