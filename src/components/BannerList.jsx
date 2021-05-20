import React from 'react';

import BannerCta from './BannerCta';

const list_items = [
	[
		"https://static-assets.coinbase.com/earn/campaigns/skale/asset-logo.svg",
		"SKALE",
		"SKL",
		"Earn $3 SKL"
	],
	[
		"https://static-assets.coinbase.com/earn/campaigns/ampleforth-governance-token/asset-logo.svg", 
		"Ampleforth Governance Token", 
		"FORTH", 
		"Earn $3 FORTH"],
	[
		"https://static-assets.coinbase.com/earn/campaigns/the-graph/asset-logo.svg", 
		"The Graph", 
		"GRT", 
		"Earn $3 GRT"
	],
	[
		"https://static-assets.coinbase.com/earn/campaigns/stellar/asset-logo.svg", 
		"Stellar Lumens", 
		"XLM", 
		"Earn $3 XLM"
	]
]

const BannerListItem = props => (
	<div
		className="bg-white rounded-none md:rounded-md mb-0 md:mb-2 hover:shadow-xl cursor-pointer flex items-center w-full p-6 whitespace-nowrap first:border-t md:first:border-t-0 border-b border-r border-l md:border-0"
		style={{transition: 'box-shadow 500ms ease 0s, opacity 500ms ease 0s, z-index 0ms ease-out 500ms'}}
	>
		<img
			src={props.icon}
			alt="image"
			height="38px"
			width="38px"
			className="mr-4"
		/>
		<h2 className="text-lg sm:text-xl md:text-2xl w-min md:w-auto font-medium whitespace-normal">{props.title}</h2>
		<h3 className="mx-4 text-lg font-medium hidden md:block">{props.sub}</h3>
		<div className="ml-auto font-medium text-green-primary">{props.earn}</div>
	</div>
)


const BannerList = () => {
	return (
		<section
			className="flex flex-shrink-0 w-full p-6 mx-auto"
			style={{maxWidth: '1180px'}}
		>
			<div className="md:flex w-full" style={{flex: '1 0 auto'}}>
				<div className="flex-1/2 flex justify-start w-full">
					<BannerCta />
				</div>
				<div className="mt-5 md:mt-0 flex-1/2 flex-col justify-end w-full">
					<div className="w-full">
						<div className="BannerList flex flex-col flex-grow justify-center">
							{list_items.map((item, id) => (
								<BannerListItem
									key={id}
									icon={item[0]}
									title={item[1]}
									sub={item[2]}
									earn={item[3]}
								/>
							))}
							<a className="block pt-3 pr-6 text-blue-primary" href="#">
								View more >
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BannerList