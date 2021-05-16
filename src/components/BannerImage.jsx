import React from 'react';

import BannerCta from './BannerCta';


const BannerImage = () => (
	<section className="flex flex-row w-full overflow-hidden relative bg-banner-primary text-white md:bg-banner-secondary md:text-black h-80 md:h-banner">

		<div className="flex-1/2 flex justify-center w-full relative z-10">
			<BannerCta />
		</div>

		<div className="flex-1/2 w-full hidden md:block">
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

export default BannerImage