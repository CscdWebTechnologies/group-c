import React from 'react';

import PriceTableBody from './PriceTableBody';


const PriceTableHead = () => {
	const _th = ["#", "Name", "Price", "Change", "Chart", "Trade"]

	return (
		<thead className="hidden md:table-row-group">
			<tr>
				{_th.map((item, id) => {
					return (
						<td key={id} className="first:pl-8 py-4 pr-12 text-gray-600 text-left text-sm font-light whitespace-nowrap">
							{item}
						</td>
					);
				})}
			</tr>
		</thead>
	)
}


const PriceTable = () => {
	return (
		<section className="font-light">
			<div
				className="mx-auto border border-b-0 sm:border-b rounded-sm"
				style={{maxWidth: '1142px', boxShadow: 'rgb(17 51 83 / 2%) 0px 4px 12px 0px'}}
			>
				<table
					className="w-full md:border-b overflow-y-scroll"
					style={{borderSpacing: '0px', captionSide: 'top'}}
				>
					<PriceTableHead />
					<PriceTableBody />
				</table>
			</div>
		</section>
	)
}

export default PriceTable