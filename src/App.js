import React from "react";
import DonationForm from "./Components/DonationForm.js"
import TopBar from "./Components/TopBar";
import Progress from "./Components/Progress.js"
import RecentDonations from "./Components/RecentDonations.js"

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

let sum = 0;

export default class App extends React.Component {
  render() {
    const posts = donations.map((donos) => {
      sum += donos.amount
      return <RecentDonations amount={donos.amount} caption={donos.caption} name={donos.name}/>
    })
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
          <h3> Recent Donations</h3>
            {posts}
            <div className="col-8">
              <Progress sum={sum} />
              <hr />
              <DonationForm/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
