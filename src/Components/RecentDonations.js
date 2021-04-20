import React from 'react'

function RecentDonations(props) {
	const { donations } = props

	const allDonations = donations.map((donation, i) => {
		return (
			<li className='media my-2' key={i}>
				<div className='media-body'>
					<h5 className='mt-0 mb-1'>
						{donation.name} donated ${donation.amount}
					</h5>
				<p>{donation.caption}</p>
				</div>
			</li>
		)
	})
	return (
		<ul className='col-4 list-unstyled recent-donations'>
			<h3 className='my-4'>Recent Donations</h3>
			{allDonations}
		</ul>
	)
}

export default RecentDonations
