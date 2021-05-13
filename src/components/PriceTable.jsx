import React from 'react';

const price_table = [
	["#", "Name", "Price", "Change", "Chart", "Trade"],
	[["Bitcoin", "BTC"], "GHS 289,846.27", "-8.40%"],
	[["Ethereum", "ETH"], "GHS 289,846.27", "-8.40%"],
	[["Bitcoin Cash", "BCH"], "GHS 289,846.27", "-8.40%"],
]

const PriceTable = () => {
	return (
		<section className="mb-10">
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
					<tbody className="divide-y">
						{price_table.slice(1, price_table.length).map((row, rid) => {
							return (
								<tr key={rid} className="">
									<td className="pl-8">{++rid}</td>
									<td className="">
										{row[0].map((item, id) => {
											return <span key={id}>{item}</span>
										})}
									</td>
									<td className="">
										<span key={row.id}>{row[1]}</span>
									</td>
									<td className="text-red-500">
										<span key={row.id}>{row[2]}</span>
									</td>
									<td>
										<span>-----</span>
									</td>
									<td>
										<span>Buy</span>
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