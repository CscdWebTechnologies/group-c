import React from 'react';


const _tb = [
	[["Bitcoin", "BTC"], "GHS 289,846.27", "-8.40%"],
	[["Ethereum", "ETH"], "GHS 289,846.27", "-8.40%"],
	[["Bitcoin Cash", "BCH"], "GHS 289,846.27", "-8.40%"],
	[["Bitcoin Cash", "BCH"], "GHS 289,846.27", "-8.40%"],
]

const PriceTableBody = () => {
	return (
		<tbody className="text-lg">
			{_tb.map((row, rid) => {
				return (
					<tr key={rid} className="border-t first:border-t-0 md:first:border-t">

						<td className="hidden md:table-cell pl-8 py-3 pr-12" style={{width: '85px'}}>
							{++rid}
						</td>

						<td className="pl-8 md:pl-0 py-4 pr-12" style={{minWidth: '140px'}}>
							<div className="flex flex-row items-center">
								<img
									className="flex-shrink-0 rounded-full"
									src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
									alt="icon"
									height="40"
									width="40"
								/>
								<div className="md:flex">
									{row[0].map((item, id) => {
										return <span className="pl-4 block last:text-gray-400" key={id}>{item}</span>
									})}
								</div>
							</div>
						</td>

						<td className="py-3 pr-12 text-right md:text-left" style={{width: '132px'}}>
							<span className="block whitespace-nowrap" key={row.id}>{row[1]}</span>
							<span className="block md:hidden text-red-500" key={row.id}>{row[2]}</span>
						</td>

						<td className="hidden md:table-cell text-red-500" style={{width: '100px', fontVariantNumeric: 'tabular-nums'}}>
							<span key={row.id}>{row[2]}</span>
						</td>

						<td className="hidden md:table-cell pr-6 pl-2" style={{width: '100px'}}>
							<span className="text-gray-300">-----</span>
						</td>

						<td className="hidden md:table-cell pr-8 py-3 pl-3" style={{width: '70px'}}>
							<button className="text-sm text-white py-3 px-4 rounded-sm border border-gray-primary bg-green-primary">Buy</button>
						</td>

					</tr>
				)
			})}
		</tbody>
	)
}

export default PriceTableBody