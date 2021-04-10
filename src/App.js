import React from "react";

import TopBar from "./Components/TopBar";

import "./App.css";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";

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
let total = 0;
let goal = 1000;
const listOfDonations = donations.map((donors) => {
  total = donors.amount + total;

});
export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            {/* TODO: Donations */}
            <RecentDonations donations={donations} />

            <div className="col-8">
              {/* TODO: Progress */}
              <Progress total={total} goal={goal} />
              {/* donations={listOfDonations} */}
              <hr />
              {/* TODO: DonationForm */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
