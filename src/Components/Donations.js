import React from 'react';

const Donations = (props) => {
    const {amount, caption, name,} = props
    return (
        <div className="donations">
            <li>
              {name} donated ${amount}
              <p>{caption}</p>
            </li>
        </div>
    );
  };

// const Donations = ({donations}) =>{
//     return (
//         <div>
//             <h4>Recent Donations</h4>
//             {donations.map((donation) =>{return <RecentDonations name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>
//             })}
//         </div>
//     )
// }

export default Donations;