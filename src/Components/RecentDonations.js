import React from "react";
import RecentDonation from "./RecentDonation";

// const RecentDonations = (props) => {
//   const { name,amount,caption } = props
//   return (
//     <ul>
//       <h5>Recent Donations</h5>
//       <li>
//     <div className="recentDonations">

//       <h2>{name} donated ${amount}</h2>
//       <p>{caption}</p>


//     </div>
//       </li>
//     </ul>
//   )
// };



export default class RecentDonations extends RecentDonation.Component {
  render() {
    
    // const {donations} = props
    const donated = donations.map(donation =>{
      return <RecentDonation name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>
    })
    return (
      <div className="listitem">
      <h2>Recent Donations</h2>
      <ul>
        {donated}
      </ul>
    </div>
  )
}
};

// export default RecentDonations;
