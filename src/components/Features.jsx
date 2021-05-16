import React from 'react';

import Heading from './Heading';

const features = [
	[
		"Secure storage",
		"We store the vast majority of the digital assets in secure offline storage.",
		"Learn how Coinbase keeps your funds safe and secure"
	],
	[
		"Protected by insurance",
		"Cryptocurrency stored on our servers is covered by our insurance policy.",
		"Learn how your crypto is covered by our insurance policy"
	],
	[
		"Industry best practices",
		"Coinbase supports a variety of the most popular digital currencies.",
		"Learn how we implement industry best practices for account security"
	]
]

const FeatureItem = props => (
	<div className="flex flex-col items-center px-6 text-center mb-10 sm:mb-0">
		<svg width="64" height="64" viewBox="0 0 64 64" fill="none">
			<path d="M56 0H8v50h48V0z" fill="#BFE9FF"></path>
			<path d="M64 10H0v48h64V10z" fill="#56B4FC"></path>
			<path d="M56 10H8v40h48V10z" fill="#1652F0"></path>
			<path d="M10 16H6v8h4v-8zM10 36H6v8h4v-8z" fill="#1652F0"></path>
			<path d="M64 58h-8v6h8v-6zM8 58H0v6h8v-6z" fill="#56B4FC"></path>
			<path d="M41.19 20.81c-5.07-5.07-13.32-5.07-18.38 0-5.06 5.07-5.07 13.32 0 18.38 2.53 2.53 5.86 3.8 9.19 3.8 3.33 0 6.66-1.27 9.19-3.8 5.07-5.07 5.07-13.31 0-18.38zM32 19c2.5 0 5 .85 7.04 2.55l-2.85 2.85A6.99 6.99 0 0032 23c-1.53 0-2.98.5-4.19 1.4l-2.85-2.85A11.03 11.03 0 0132 19zm3.54 14.54c-.95.94-2.2 1.46-3.54 1.46-1.34 0-2.59-.52-3.54-1.46A4.952 4.952 0 0127 30c0-1.33.52-2.59 1.46-3.54.94-.95 2.2-1.46 3.54-1.46 1.34 0 2.59.52 3.54 1.46.95.94 1.46 2.21 1.46 3.54s-.52 2.59-1.46 3.54zM23.55 22.96l2.85 2.85A6.99 6.99 0 0025 30c0 1.53.5 2.98 1.4 4.19l-2.85 2.85a11.018 11.018 0 010-14.08zm1.41 15.49l2.85-2.85a6.969 6.969 0 008.38 0l2.85 2.85a11.018 11.018 0 01-14.08 0zm15.49-1.41l-2.85-2.85c.9-1.2 1.4-2.65 1.4-4.19 0-1.53-.5-2.98-1.4-4.19l2.85-2.85a11.018 11.018 0 010 14.08z" fill="#fff"></path>
		</svg>
		<h2 className="mt-16 mb-4 text-lg font-medium">{props.title}</h2>
		<p className="text-gray-400 mt-4 mb-6">{props.sub}</p>
		<a className="text-sm font-medium text-blue-primary" href="#">{props.link} ></a>
	</div>
)

const Features = () => {
	return (
		<section
			className="flex flex-shrink-0 w-full mx-auto p-12"
			style={{maxWidth: '1180px'}}
		>
			<div className="flex-1 flex flex-col items-center my-16">
				<Heading
					title="The most trusted cryptocurrency platform"
					subTitle="Here are a few reasons why you should choose Coinbase"
				/>
				<div className="sm:flex mt-24">
					{features.map((item, id) => (
						<FeatureItem key={id} title={item[0]} sub={item[1]} link={item[2]} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Features