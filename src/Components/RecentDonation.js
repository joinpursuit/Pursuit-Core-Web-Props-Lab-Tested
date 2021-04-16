import React from "react";



const RecentDonation =({name, amount, caption})=>{
    return(
        <li><strong>{name} donated ${amount}</strong><br></br>{caption}</li>
    )
}

export default RecentDonation