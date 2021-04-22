import React from "react";
import CurrentDonation from "./CurrentDonation";

const RecentDonations = (props) => {
  const { donations } = props;

const displayDonations = donations.map(donation => {
  
return <CurrentDonation name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.index}></CurrentDonation>

});
return (
  <div className="recentDonations">

    <h5>Recent Donations</h5>
    <ul>
      {displayDonations}
    </ul>
  </div>
)




  // return (
  //   <div className="recent-donations">
  //     <h5 className="my-4">Recent Donations</h5>
  //     {donations.map((donation) => { 
  //       return (
  //         <ul
  //           key={donation.index}
  //           className="col-4 list-unstyled recent-donations"
  //         >
           
  //           <li key={donation.index} className="media my-2">
  //             <div className="media-body">
  //               <h5 className="mt-0 mb-1">
  //                 {donation.name}
  //                 {"\u00A0"}
  //                 donated{"\u00A0"}${donation.amount}
  //                 {/* {"\u00A0"} */}
  //               </h5>
  //               {donation.caption}
  //             </div>
  //           </li>
  //         </ul>
  //       );
  //     })}
  //   </div>
  // );
};
export default RecentDonations;
