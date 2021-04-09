import React from "react";

import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";


import "./App.css";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";

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
    let total = 0

    for (let donation of donations){
      total += donation.amount
    }
    // const donation = donations.map((donate) =>{ 
    //     return(
    //       <RecentDonations
    //         amount = {donate.amount}
    //         name = {donate.name}
    //         caption = {donate.caption}
    //         total = {total += donate.amount}
    //         donations = {donations}
    //       />
    //     )
    // })

    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <RecentDonations 
            donations = {donations}
            />
          {/* <h2>Recent Donations</h2> */}
            {/* <div> {donation}</div> */}
            {/* TODO: Donations */}

            <div className="col-8">
              <Progress 
              total = {total}
              goal = {'1000'}
              />
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
