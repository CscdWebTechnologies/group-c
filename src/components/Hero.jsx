import React from 'react'

const Hero = () => {
	return (
		<section
			className="py-6 px-6 sm:px-14 mx-auto w-full overflow-hidden"
			style={{maxWidth: '1142px'}}
		>
			<div className="sm:flex sm:items-center sm:flex-row">

				{/* right */}
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

				{/* left */}
				<div
					className="hidden md:flex justify-end flex-2"
					style={{paddingTop: '36px', paddingLeft: '25px'}}
				>
					<svg className="w-auto" style={{height: '600px'}} width="680" height="956" viewBox="0 0 680 956" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="340" cy="428" r="340" fill="#F1F5FE"></circle>
						<g filter="url(#prefix__filter0_dd)">
							<path d="M481 10H198c-32.032 0-58 25.968-58 58v720c0 32.032 25.968 58 58 58h283c32.032 0 58-25.968 58-58V68c0-32.032-25.968-58-58-58z" fill="url(#prefix__paint0_linear)"></path>
							<path d="M472.489 22H206.511C176.406 22 152 47.222 152 78.335v699.33C152 808.778 176.406 834 206.511 834h265.978C502.594 834 527 808.778 527 777.665V78.335C527 47.222 502.594 22 472.489 22z" fill="url(#prefix__img1)"></path>
							<g filter="url(#prefix__filter1_f)">
							<path d="M213.5 15.5c-38.883 0-67.5 23.943-67.5 61.343V783.5c0 20.5 11.5 57 65.5 57" stroke="url(#prefix__paint1_radial)"></path>
							</g>
							<g filter="url(#prefix__filter2_f)">
							<path d="M465.5 15c38.883 0 67.5 23.943 67.5 61.343V783c0 20.5-11.5 57-65.5 57" stroke="url(#prefix__paint2_radial)"></path>
							</g>
							</g>
							<defs>
							<filter id="prefix__filter0_dd" x="48" y="0" width="519" height="956" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
							<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
							<feOffset dx="-32" dy="50"></feOffset><feGaussianBlur stdDeviation="30"></feGaussianBlur>
							<feColorMatrix values="0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.25 0"></feColorMatrix>
							<feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="15"></feOffset><feGaussianBlur stdDeviation="7.5"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0.1 0"></feColorMatrix><feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape"></feBlend></filter><filter id="prefix__filter1_f" x="143.5" y="13" width="72" height="830" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur"></feGaussianBlur></filter><filter id="prefix__filter2_f" x="463.5" y="12.5" width="72" height="830" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur"></feGaussianBlur></filter><radialGradient id="prefix__paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(286.75008 212.24974 -632.54832 854.57482 179.75 390.25)"><stop stopOpacity="0.2"></stop><stop offset="1" stopOpacity="0"></stop></radialGradient><radialGradient id="prefix__paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 756.5 -2254.52 0 499 131)"><stop stopOpacity="0"></stop><stop offset="0.453" stopOpacity="0.2"></stop>
							<stop offset="1" stopOpacity="0"></stop></radialGradient>
							<linearGradient id="prefix__paint0_linear" x1="539" y1="654" x2="-169.5" y2="799.5" gradientUnits="userSpaceOnUse">
							<stop stopColor="#F2F2F3"></stop><stop offset="0.64" stopColor="#CACED2"></stop></linearGradient><pattern id="prefix__img1" patternUnits="objectBoundingBox" width="1" height="1" viewBox="0 0 375 812">
							<image href="https://assets.coinbase.com/assets/portfolio.352f1ebd5622fb93068757ca3a33b88b.svg" width="375" height="812"></image>
							</pattern>
							</defs>
						</svg>
				</div>

			</div>
		</section>
	)
}

export default Hero