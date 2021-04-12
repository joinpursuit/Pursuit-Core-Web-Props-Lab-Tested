import React from 'react';
import "./RecentDonations.css"

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


export default Donations;