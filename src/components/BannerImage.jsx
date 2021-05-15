import React from 'react';

import BannerCta from './BannerCta';

import Img from '../assets/hosted';


const BannerImage = () => (
	<section className="flex flex-row w-full overflow-hidden relative bg-banner h-banner">

		<div className="flex-1/2 flex justify-center w-full">
			<BannerCta />
		</div>

		<div className="flex-1/2 w-full">
			<div
				className="flex flex-row self-end absolute top-0 right-0 h-auto"
				style={{width: '65%', maxWidth: '750px'}}
			>
				<img
					src={Img.banner_image}
					alt="image"
					loading="lazy"
				/>
			</div>
		</div>

	</section>
)

export default BannerImage