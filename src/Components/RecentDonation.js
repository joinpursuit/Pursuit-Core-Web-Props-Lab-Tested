import React from "react";

const RecentDonation =({name, amount, caption})=>{
    return(
        <li>{name} donated ${amount}{caption}</li>
    )
}

export default RecentDonation