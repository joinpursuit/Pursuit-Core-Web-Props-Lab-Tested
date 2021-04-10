import React from "react";
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations.js";
import Progress from "./Components/Progress.js";
import DonationForm from "./Components/DonationForm.js";
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

const listDonations = donations.map((donation) => {
  return (
    <RecentDonations
      name={donation.name}
      donation={donation.amount}
      caption={donation.caption}
    />
  );
});
let sum = 0;
const total = donations.map((elem) => {
  return (sum += elem.amount);
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="container">
          <div className="row">
            <ul className="col-4 list-unstyled recent-donations">
              <h5 className="my-4">Recent Donations</h5>
              {listDonations}
            </ul>
            <div className="col-8">
              <Progress total={sum} />
              <hr />
              <DonationForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
