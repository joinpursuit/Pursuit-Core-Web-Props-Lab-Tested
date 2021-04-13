import React from "react";

class RecentDonations extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
     const { name, amount, caption} = this.props
     let listDonations = this.props.donations.map(donation => {
      return (
        <div role='listitem'>
          <p>
            {donation.name} donated ${donation.amount}
          </p>
          <p>{donation.caption}</p>
        </div>
      );
    })
    return (
      <div className="donationTable">
        <h6 role='heading'>
          Recent Donations
        </h6>
        {listDonations}
      </div>
    );
  };
}
export default RecentDonations;
