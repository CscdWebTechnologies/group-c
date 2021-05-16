import React from 'react';

const sections = [
	["$335B", "Quarterly volume traded"],
	["100+", "Countries supported"],
	["54+M", "Verified users"],
]

const Achievement = () => {
	return (
		<section className="bg-blue-primary">
			<div className="flex flex-shrink-0 w-full mx-auto p-6" style={{maxWidth: '1180px'}}>
				<div className="sm:flex flex-row flex-auto justify-center space-y-16 sm:space-y-0 text-white my-9">
					{sections.map((item, id) => (
	        	<div className="flex-1 text-center tracking-tight" key={id}>
							<h2 className="font-semibold text-5xl md:text-6xl mb-3">{item[0]}</h2>
							<div className="opacity-80 font-light">{item[1]}</div>
	        	</div>
		      ))}
				</div>
			</div>
		</section>
	)
}

export default Achievement