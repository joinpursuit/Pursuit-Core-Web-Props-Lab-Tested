import { render } from "@testing-library/react";
import React from "react";
import "../Components/RecentDonations.css"
import OneDonation from "./OneDonation"

const RecentDonations = (props) => {
  const {donations} = props 
  const listdonations = donations.map(singleDonation =>{
    
    return  <  OneDonation donations={singleDonation}/>
  })
  return (
    <>
    <ul className="list-of-donations">
    <h4 className="recent-title">Recent Donations</h4>
    {listdonations}
    </ul>
    </>
  );
};

export default RecentDonations;
