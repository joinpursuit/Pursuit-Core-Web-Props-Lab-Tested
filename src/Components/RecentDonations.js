import React from "react";
import Donations from "./Donations";
import "../Styles/RecentDonations.css"

class RecentDonations extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        <h6>Recent Donations</h6>
        {props}
      </ul>
    );

  }
};

export default RecentDonations;
