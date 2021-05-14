import React from 'react';

import coinbase_icon from '../assets/svg/coinbase-icon.svg';

const price_table = [
	["#", "Name", "Price", "Change", "Chart", "Trade"],
	[["Bitcoin", "BTC"], "GHS 289,846.27", "-8.40%"],
	[["Ethereum", "ETH"], "GHS 289,846.27", "-8.40%"],
	[["Bitcoin Cash", "BCH"], "GHS 289,846.27", "-8.40%"],
]

const PriceTable = () => {
	return (
		<section className="">
			<div
				className="mx-auto border rounded-sm"
				style={{maxWidth: '1142px', boxShadow: 'rgb(17 51 83 / 2%) 0px 4px 12px 0px'}}
			>
				<table
					className="w-full border-b"
					style={{borderColapse: 'separate', borderSpacing: '0px', captionSide: 'top'}}
				>
					<thead>
						<tr className="border-b">
							{price_table[0].map((item, id) => {
								return (
									<td key={id} className="first:pl-8 py-4 pr-12 text-gray-600 text-left text-sm font-light whitespace-nowrap">
										{item}
									</td>
								);
							})}
						</tr>
					</thead>
					<tbody className="divide-y text-lg">
						{price_table.slice(1, price_table.length).map((row, rid) => {
							return (
								<tr key={rid} className="">
									<td className="pl-8 py-3 pr-12" style={{width: '85px'}}>{++rid}</td>
									<td className="py-4 pr-12" style={{minWidth: '140px'}}>
										<div className="flex flex-row items-center">
											<img className="flex-shrink-0 rounded-full" src={coinbase_icon} alt="icon" height="40" width="40" />
											{row[0].map((item, id) => {
												return <span className="pl-4 block" key={id}>{item}</span>
											})}
										</div>
									</td>
									<td className="py-3 pr-12" style={{width: '132px'}}>
										<span className="block whitespace-nowrap" key={row.id}>{row[1]}</span>
									</td>
									<td className="text-red-500" style={{width: '100px', fontVariantNumeric: 'tabular-nums'}}>
										<span key={row.id}>{row[2]}</span>
									</td>
									<td className="py-2 pr-6 pl-2" style={{width: '100px'}}>
										<span>-----</span>
									</td>
									<td className="pr-8 py-3 pl-3" style={{width: '70px'}}>
										<button className="text-sm text-white py-3 px-4 rounded-sm border border-gray-primary bg-green-primary">Buy</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default PriceTable