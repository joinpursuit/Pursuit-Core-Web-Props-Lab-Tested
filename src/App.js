import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations"
import Progress from "./Components/Progress"

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

// const goal = 1000
// const total = donations.reduce((a,b) => {a.amount + b.amount, 0})

const amount = {
  total: donations.reduce((a, b) => a + b.amount, 0),
  goal: 1000,
}

export default class App extends React.Component {
  
  render() {
    const recentDonations = donations.map((donation, id) => {
      return <RecentDonations name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>
    })
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <ul>{recentDonations}</ul>
           

            <div className="col-8">
              <Progress goal={amount.goal} total={amount.total}/>
              {/* <hr /> */}
              {/* TODO: DonationForm */}
            </div>
          </div>
        </div>
      </>
    );
  }
}
