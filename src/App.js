import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress.js";
import DonationForm from "./Components/DonationForm.js";
import "./App.css";

const donations = [
  {
    index: 1,
    amount: 251,
    caption: "do you luv me",
    name: "Jo",
  },
  {
    index: 2,
    amount: 30,
    caption: "Here take a break from work",
    name: "John",
  },
  {
    index: 3,
    amount: 20,
    caption: "lol",
    name: "Michelle",
  },
  {
    index: 4,
    amount: 110,
    caption: "",
    name: "Emily",
  },
  {
    index: 5,
    amount: 30,
    caption: "Go to miami",
    name: "Sam",
  },
];


export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <RecentDonations donations={donations} />
          </div>
          <div className="col-8">
          

            <Progress donations={donations} />

            <hr />
            {/* TODO: DonationForm */}
            <DonationForm />
          </div>
        </div>
      </>
    );
  }
}
