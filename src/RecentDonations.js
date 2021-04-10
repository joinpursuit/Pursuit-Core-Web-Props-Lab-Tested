import React from "react"
import recentDonation from "./RecentDonation"

const RecentDonations =(props)=>{
     const{ donations} =props;

const showDonations = donations.map(donation =>{
return 
<RecentDonation name ={donation.name} amount ={ donation.amount}
caption ={donation.caption} key ={donation.key}/>
})
return (
    <div>
        <h5>
            <u>
            {showDonations}
            </u>
        </h5>
    </div>
)
}
export default RecentDonations;
