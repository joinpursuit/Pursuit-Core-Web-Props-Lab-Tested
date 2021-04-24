import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import RecentDonations from "./Components/RecentDonations.js";
import Progress from "./Components/Progress.js";
import DonationForm from "./Components/DonationForm.js";
  
const donations = [
    {
    total: 441,
    goal: 1000
  },
];


export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            {/* TODO: Donations */}
            <RecentDonations donations={donations}/>
            <div className="col-8">
              {/* TODO: Progress */}
              <hr />
              <Progress goal={1000} total={441}/>
              <DonationForm></DonationForm>
            </div>
          </div>
        </div>
      </>
    );
  }
}
