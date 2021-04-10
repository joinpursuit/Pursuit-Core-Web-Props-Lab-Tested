import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress.js";
import DonationForm from "./Components/DonationForm.js";
import "./App.css";

const donations = [
  {
    id: 1,
    amount: 251,
    caption: "do you luv me",
    name: "Jo",
  },
  {
    id: 2,
    amount: 30,
    caption: "Here take a break from work",
    name: "John",
  },
  {
    id: 3,
    amount: 20,
    caption: "lol",
    name: "Michelle",
  },
  {
    id: 4,
    amount: 110,
    caption: "",
    name: "Emily",
  },
  {
    id: 5,
    amount: 30,
    caption: "Go to miami",
    name: "Sam",
  },
];
// const userDonations = donations.map((donation) => {

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        {/* <div className="mainContainer"> */}
          <div className="container">
            <div className="row">
              {/* TODO: Donations */}
              <div className="recent-donations">
                <h5 className="my-4">Recent Donations</h5>

                <ul className="col-4 list-unstyled recent-donations">
                  {donations.map((donation) => {
                    return (
                      <RecentDonations
                        amount={donation.amount}
                        name={donation.name}
                        caption={donation.caption}
                        id={donation.id}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          <div className="col-8">
            {/* TODO: Progress */}
            <Progress />
            <hr />
            {/* TODO: DonationForm */}
            <DonationForm />
          </div>
          </div>

        {/* </div> */}
      </>
    );
  }
}
