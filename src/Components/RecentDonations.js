import React from "react";

const RecentDonations = (props) => {
const {donations} = props
// debugger
return (
  <div className="Classes">
    <h1>Recent Donations</h1>
       {donations.map(donation =>{
         debugger
         return (
           <ul>
              <li key={donation.id}>{donation.name} donated ${donation.amount}</li>
              <li key={donation.id}>{donation.caption}</li>
            </ul>
          )
        })}
      </div>
    );
  };
  debugger

// const RecentDonations = () => {
//   return (
//     <div>
//       <h3>Recent Donations</h3>
//       <h4>{persons.name} donated ${persons.donation}</h4>
//     </div>
//   )
// }

export default RecentDonations;
