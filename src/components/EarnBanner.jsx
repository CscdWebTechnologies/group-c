import React from 'react';

const EarnBanner = () => {
	return (
		<section className="flex flex-row w-full overflow-hidden relative" style={{backgroundColor: '#e9f6ff', height: '460px'}}>
			<div className="flex justify-center w-full" style={{flex: '1 1 50%'}}>
				<div
					className="flex flex-col justify-center space-y-4"
					style={{maxWidth: '250px', maxWidth: '350px'}}
				>
					<h2 className="text-4xl font-medium">
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
			</div>

			<div className="w-full" style={{flex: '1 1 50%'}}>
				<div
					className="flex flex-row self-end absolute top-0 right-0 h-auto"
					style={{width: '65%', maxWidth: '750px'}}
				>
					<img
						src="https://assets.coinbase.com/assets/earn-upsell-desktop.852a74929173d0974480694525be02ab.jpg"
						alt="image"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	)
}

export default EarnBanner