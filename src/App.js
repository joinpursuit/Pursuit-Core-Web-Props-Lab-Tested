import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";

import DonationForm from "./Components/DonationForm";
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

// const showProgress = {
//   total: 441,
//   goal: 1000,
// };

const totalTest = {
  sumAmount: 0,
  goal: 1000,
};

export default class App extends React.Component {
  render() {
    const donationsRecent = donations.map((donation) => {
      return (
        <RecentDonations
          name={donation.name}
          amount={donation.amount}
          caption={donation.caption}
          key={donation.id}
        />
      );
    });
    const progressNow = () => {
      donations.forEach((donation) => {
        totalTest.sumAmount += donation.amount;
      });
      return <Progress sumAmount={totalTest.sumAmount} goal={totalTest.goal} />;
    };
    const newProgress = progressNow();

    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <ul className="col-4 list-unstyled recent-donations">
              <h3>Recent Donations</h3>
              {donationsRecent}
            </ul>
            <div className="col-8">
              {newProgress}
              {/* <div className="progress"> */}
                {/* <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style="width: 25%;"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  25%
                </div> */}
              {/* </div> */}
              {/* TODO: Progress */}
              <hr />
              <DonationForm />
              {/* TODO: DonationForm */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
