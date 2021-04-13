import React from "react";
import "./RecentDonations.css";

const donations = [
  {
    amount: 12,
    caption: "Let's all !",
    name: "Apple",
    id: 1,
  },
  {
    amount: 25,
    caption: "Let's all give to!",
    name: "Banana",
    id: 2,
  },
  {
    amount: 50,
    caption: "Let's all give to this great cause!",
    name: "Cherry",
    id: 3,
  },
];

export const sum = () => {
  let sum = 0;
  donations.forEach((amt)=>{
    sum +=  amt.amount;
  })
  return sum;
}

const RecentDonations = () => {
  // const {id, name, amount, caption} = donations;



  return(  
  <ul className="col-4 list-unstyled recent-donations">
    <h5 className='my-4'>Recent Donations</h5>

      {donations.map((donation, i) => {
        
    return (
      <li className="media my-2">
      <div className="media-body">
        <h5 className="mt-0 mb-1">
        {donation.name} donated ${donation.amount}
        </h5>
          {donation.caption}
      </div>
    </li>
    );

  })}

</ul>
  );

};

export default RecentDonations;
