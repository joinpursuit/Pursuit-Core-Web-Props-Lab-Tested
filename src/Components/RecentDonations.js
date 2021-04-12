import React from "react";
import Donations from './Donations'
// import "./RecentDonations.css"


const RecentDonations = ({donations}) =>{
    const showDonations = donations.map((donation) =>{
      return <Donations name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>
          })
      return(
        <div>
          <h4>Recent Donations</h4>
          {showDonations}
        </div>
      )
   
}

export default RecentDonations;
