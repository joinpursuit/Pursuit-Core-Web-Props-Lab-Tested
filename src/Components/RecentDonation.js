import React from "react";
import"../Styles/RecentDonation.css"


const RecentDonation =({name, amount, caption})=>{
    return(
        <li><strong>{name} donated ${amount}</strong><br></br>{caption}</li>
    )
}

export default RecentDonation