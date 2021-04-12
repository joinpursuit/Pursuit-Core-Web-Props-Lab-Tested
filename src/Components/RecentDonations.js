import React from "react";
import './Donations.css'


function RecentDonations(props) {
  const  { name, amount, caption } = props
  return (
		<div className='recentDonations'>
			<ul>
				<li>
					<h4>Recent Donations</h4>
				</li>
				<h4>
					<li>{name} donated ${amount}</li>
				</h4>
				<p>{caption}</p>
			</ul>
		</div>
  )
}

export default RecentDonations
