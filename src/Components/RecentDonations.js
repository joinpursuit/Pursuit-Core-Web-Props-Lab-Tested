import React from 'react'
import Donation from './Donation'

const RecentDonations = (props) =>{

    return(
        
    <ul>
        <h5>Recent Donations</h5>
        <Donation />
        
    </ul>);
}

export default RecentDonations;

// {donations.map((user) => (
//     <RecentDonations
//       amount={user.amount}
//       caption={user.caption}
//       name={user.name} 
//       key ={user.id}
//     />
//   ))}