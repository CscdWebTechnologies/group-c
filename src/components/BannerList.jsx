import React from 'react';

import BannerCta from './BannerCta';

import Img from '../assets/hosted';


const BannerList = () => (
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
						<div
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
							<h2 className="text-xl font-medium">jkaknsjk</h2>
							<h3 className="mx-4 text-lg font-medium">,sml;dk</h3>
							<div>jsa</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default BannerList