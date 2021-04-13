import React from 'react';
import RecentDonations from './RecentDonations';

function PropsArray() {
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
    let total = 0
    for (let item of donations) {
        total += item.amount
    }
    // const donationsAmount = donations.map(donation => {
    //     return (<Progress amount={donation.amount}/>)
    // })


    return (
      <>  
        <RecentDonations donations = {donations} />
        <Progress total = {total}/>
      </>  
    )

}

export default PropsArray