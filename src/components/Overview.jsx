import React from 'react';

import Heading from './Heading';


const features = [
	[
		"",
		"Manage your portfolio",
		"Buy and sell popular digital currencies, keep track of them in the one place."
	],
	[
		"",
		"Recurring buys",
		"Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly."
	],
	[
		"",
		"Vault protection",
		"For added security, store your funds in a vault with time delayed withdrawals."
	],
	[
		"",
		"Mobile apps",
		"Stay on top of the markets with the Coinbase app for Android or iOS."
	]
]


const Overview = () => {

	const listFeatures = features.map((feat, id) => (
		<div key={id} className="flex mb-10">
			<div
				className="flex-shrink-0 w-16 h-16 mr-7 -mt-2 rounded-full flex items-center justify-center"
				style={{boxShadow: 'rgb(218 225 233 / 56%) 0px 8px 16px'}}
			>
				<svg width="30" height="32" viewBox="0 0 30 32"><g fill="none" fillRule="evenodd"><path fill="#D4EEFF" d="M10 32h10V10H10z"></path><path fill="#1752F0" d="M20 32h10V0H20z"></path><path fill="#55B4FC" d="M0 32h10V19H0z"></path></g></svg>
			</div>
			<div>
				<h2 className="mb-3 text-xl font-semibold">{feat[1]}</h2>
				<p className="text-gray-500 font-light">{feat[2]}</p>
			</div>
		</div>
	))

	return (
		<section className="w-full mx-auto p-6" style={{maxWidth: '1180px'}}>
			<div className="flex flex-col items-center mt-8 mb-16">
				<Heading
					title="Create your cryptocurrency portfolio today"
					subTitle="Coinbase has a variety of features that make it the best place to start trading"
				/>
				<div className="flex flex-col-reverse w-full items-center mt-8 xl:mt-16 xl:flex-row xl:justify-between">
					<div className="flex flex-col mt-10 flex-1 xl:mr-4">
						{listFeatures}
					</div>
					<div className="" style={{maxWidth: '700px'}}>
						<img
							src="https://assets.coinbase.com/assets/coinbase-app.51b8f3dbe406092d16845f3e74870061.jpg"
							alt="image"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Overview