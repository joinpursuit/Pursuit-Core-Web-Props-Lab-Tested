import React from "react";

import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
import TopBar from "./Components/TopBar";

import "./App.css";

const donations = [
  {
    amount: 50,
    caption: "Let's all give to this great cause!",
    id: 1,
    name: "John",
  },
  {
    amount: 50,
    caption: "Let's all give to this great cause!",
    id: 2,
    name: "John",
  },
  {
    amount: 50,
    caption: "Let's all give to this great cause!",
    id: 3,
    name: "John",
  },
];

export default class App extends React.Component {
  render() {
    const total = donations.reduce((previous, donation) => previous + donation.amount, 0);

    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <RecentDonations donations={donations} />

            <div className="col-8">
              <Progress goal={5000} total={total} />
              <hr />
              <DonationForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}
