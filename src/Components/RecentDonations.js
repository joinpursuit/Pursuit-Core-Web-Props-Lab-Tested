import React from "react";
import "./RecentDonations.css";

const RecentDonations = (donations) => {
  const {id, name, amount, caption} = donations;

  return(   
    <li class="media my-2">
      <div class="media-body">
        <h5 class="mt-0 mb-1">{id}: {name} donated ${amount}</h5>
          {caption}
      </div>
    </li>
  );
};

export default RecentDonations;
