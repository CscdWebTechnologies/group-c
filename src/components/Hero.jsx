import React from 'react';

import HeroImage from './HeroImage';

const Hero = () => {
	return (
		<section
			className="py-6 px-6 sm:px-14 mx-auto w-full overflow-hidden"
			style={{maxWidth: '1142px'}}
		>
			<div className="sm:flex sm:items-center sm:flex-row">

				<div
					className="flex items-start flex-col flex-1"
					style={{paddingTop: '100px', paddingBottom: '111px'}}
				>
					<div className="flex cursor-pointer items-center text-blue-primary font-bold">
						<svg className="my-2 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#1652F0"></path>
							<path d="M17.274 10.515c.235-1.572-.962-2.417-2.599-2.981l.531-2.13-1.296-.323-.517 2.074c-.34-.086-.69-.165-1.039-.245l.521-2.087L11.58 4.5l-.53 2.13c-.283-.065-.56-.128-.829-.196l.002-.007-1.788-.446-.345 1.385s.962.22.942.234c.525.13.62.478.603.754L9.03 10.78c.036.01.083.023.135.043l-.137-.034-.848 3.4c-.064.158-.227.398-.595.307.014.019-.941-.235-.941-.235L6 15.745l1.688.42c.313.08.62.162.923.239l-.537 2.154 1.296.322.53-2.13c.355.096.698.184 1.034.268l-.53 2.121 1.297.323.536-2.15c2.211.419 3.873.25 4.573-1.75.564-1.61-.028-2.538-1.191-3.144.847-.195 1.485-.752 1.655-1.903zm-2.963 4.153c-.4 1.61-3.11.74-3.99.522l.713-2.854c.879.22 3.697.654 3.277 2.332zm.402-4.176c-.365 1.464-2.621.72-3.353.537l.645-2.587c.731.182 3.089.522 2.708 2.05z" fill="#fff"></path>
						</svg>
						Jump start your portfolio
						<svg className="ml-2" width="16" height="12" viewBox="0 0 16 12" fill="none">
							<path d="M0 7h12.17l-3.28 3.28 1.41 1.41L16 6 10.3.31 8.89 1.72 12.17 5H0v2z" fill="#1652F0"></path>
						</svg>
					</div>
					<h1 className="mt-2 mb-4 text-4xl sm:text-6xl font-bold leading-tight md:max-w-sm">
						Jump start your crypto portfolio
					</h1>
					<h2 className="mb-8 text-base sm:text-lg sm:font-semibold">
						Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.
					</h2>
					<div
						className="flex self-stretch sm:items-start flex-col min-w-0 w-full md:min-w-sm"
					>
						<form className="flex flex-col sm:flex-row w-full">
							<input
								className="px-5 py-4 flex-auto font-light text-lg border rounded-sm transition duration-150 ease bg-white focus:border-blue-primary focus:outline-none"
								type="text"
								placeholder="Email address"
								autoComplete="off"
							/>
							<button className="whitespace-nowrap w-full sm:w-auto mt-2 sm:mt-0 sm:ml-3 py-4 px-10 text-base rounded-sm text-white transition duration-75 ease-in-out border border-blue-primary bg-blue-primary">
								Get started
							</button>
						</form>
						<a
							className="mt-3 underline tracking-wide text-blue-primary"
							href="#"
							style={{fontSize: '9px'}}
						>
							*Terms apply
						</a>
					</div>
				</div>

				<div
					className="hidden md:flex justify-end flex-2"
					style={{paddingTop: '36px', paddingLeft: '25px'}}
				>
					<HeroImage />
				</div>

			</div>
		</section>
	)
}

export default Hero