import React from 'react';

import Heading from './Heading';

const steps = [
	["Create an account"],
	["Link your bank account"],
	["Start buying and selling"]
]

const QuickStartStep = props => (
	<>
		<div className="hidden sm:block first:hidden h-line flex-1 mt-10 bg-gray-400"></div>
		<div className="text-center mb-20">
			<svg className="mx-auto" width="64" height="60" viewBox="0 0 64 60" fill="none">
				<path d="M32 16a8 8 0 100-16 8 8 0 000 16zM32 20c-11.05 0-20 7.16-20 16v18h40V36c0-8.84-8.95-16-20-16z" fill="#56B4FC"></path>
				<path d="M64 36H0v24h64V36z" fill="#BFE9FF"></path>
				<path d="M52 36H12v24h40V36z" fill="#1652F0"></path>
				<path d="M33 42h-2v12h2V42z" fill="#fff"></path>
				<path d="M38 49v-2H26v2h12z" fill="#fff"></path>
			</svg>
			<h2 className="mb-5 mt-8 px-2 text-xl font-medium">
				{props.step}
			</h2>
		</div>
	</>
)

const QuickStart = () => {
	return (
		<section
			className="w-full mx-auto p-6 flex flex-shrink-0"
			style={{maxWidth: '1180px'}}
		>
			<div className="flex-1 mt-16 w-4/5 flex flex-col items-center">
				<Heading
					title="Get started in a few minutes"
					subTitle="Coinbase supports a variety of the most popular digital currencies."
				/>
				<div className="sm:flex w-4/5 my-16">
					{steps.map(step => <QuickStartStep key={step} step={step} />)}
				</div>
			</div>
		</section>
	)
}

export default QuickStart