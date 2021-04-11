import React from "react";
import RecentDonation from "./RecentDonation";

const RecentDonations = (props) => {
    const {donations} = props  
    // debugger
    return (
        <div className="listitem">
    <h2>Recent Donations</h2>
    <ul>
        {donations.map(donation =>{
           return <RecentDonation name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>
         })}
    </ul>
  </div>
  )
};

export default RecentDonations;


// export default class RecentDonations extends RecentDonation.Component {
//   render() {
    
//     const {donations} = props
//     const donated = donations.map(donation =>{
//       return <RecentDonation name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>
//     })
//     return (
//       <div className="listitem">
//       <h2>Recent Donations</h2>
//       <ul>
//         {donated}
//       </ul>
//     </div>
//   )
// }
// };

