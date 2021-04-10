import React from "react";
import recentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm"

import TopBar from "./Components/TopBar";

import "./App.css";

const donations = [
  {
    amount: 251,
    caption: "do you luv me",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here take a break from work",
    id: 2,
    name: "John",
  },
  {
    amount: 20,
    caption: "lol",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 110,
    caption: "",
    id: 4,
    name: "Emily",
  },
  {
    amount: 30,
    caption: "Go to miami",
    id: 5,
    name: "Sam",
  },
];

export default class App extends React.Component {
  render() {
    let total =0;
    donations.map(donate =>{
      return total += donate.amount;
    })
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            {/* TODO: Donations */}

            <div className="col-8">
              {/* TODO: Progress */}
              < Progress total ={total} goal ={1000}/>
              <hr />
              {/* TODO: DonationForm */}
              <DonationForm/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
