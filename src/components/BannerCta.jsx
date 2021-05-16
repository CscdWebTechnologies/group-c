import React from 'react';

const BannerCta = props =>  (
	<div
		className="flex flex-col justify-center text-center md:text-left items-center md:items-start mx-auto md:mx-0 space-y-4"
		style={{minWidth: '250px', maxWidth: '350px'}}
	>
		<h2 className="text-3xl md:text-4xl font-medium">
			Earn up to $28 worth of crypto
		</h2>
		<p className="text-sm">
			Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
		</p>
		<button
			className="bg-blue-primary text-white font-medium whitespace-nowrap rounded-sm text-sm py-3 px-4"
			style={{width: 'fit-content'}}
		>
			Start earning
		</button>
	</div>
)

export default BannerCta