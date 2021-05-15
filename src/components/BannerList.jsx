import React from 'react';

import Img from '../assets/hosted';

import BannerCta from './BannerCta';

const items = [
	["", "SKALE", "SKL", "Earn $3 SKL"],
	["", "The Graph", "Grt", "Earn $3 GRT"],
	["", "SKALE", "SKL", "Earn $3 SKL"],
	["", "The Graph", "Grt", "Earn $3 GRT"],
]


const BannerList = () => {

	const list = items.map(item => (
		<div
			key={item.id}
			className="bg-white rounded-md shadow-lg cursor-pointer flex items-center w-full p-6 whitespace-nowrap"
			style={{transition: 'box-shadow 500ms ease 0s, opacity 500ms ease 0s, z-index 0ms ease-out 500ms'}}
		>
			<img
				src={Img.banner_list_first}
				alt="image"
				height="38px"
				width="38px"
				className="mr-4"
			/>
			<h2 className="text-2xl font-medium">{item[1]}</h2>
			<h3 className="mx-4 text-lg font-medium">{item[2]}</h3>
			<div className="ml-auto font-medium text-green-primary">{item[3]}</div>
		</div>
	))

	return (
		<section
			className="flex flex-shrink-0 w-full p-6 mx-auto"
			style={{maxWidth: '1180px'}}
		>
			<div className="flex w-full" style={{flex: '1 0 auto'}}>
				<div className="flex-1/2 flex justify-start w-full">
					<BannerCta />
				</div>
				<div className="flex-1/2 flex-col justify-end w-full">
					<div className="w-full">
						<div
							className="flex flex-col flex-grow justify-center"
							style={{minWidth: '500px'}}
						>
							{list}
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