import React from 'react';

import Button from './Button';

const BannerCta = props =>  (
	<div
		className="flex flex-col justify-center space-y-4"
		style={{minWidth: '250px', maxWidth: '350px'}}
	>
		<h2 className="text-4xl font-medium">
			Earn up to $28 worth of crypto
		</h2>
		<p className="text-sm">
			Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.
		</p>
		<Button value="Start earning" />
	</div>
)

export default BannerCta
