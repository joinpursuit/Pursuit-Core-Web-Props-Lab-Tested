import React from "react";
import TopBar from "./Components/TopBar";
import DonationForm from './Components/DonationForm'
import Progress from './Components/Progress'
import RecentDonations from './Components/RecentDonations'
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

let total = donations.reduce((acc,ele) => {
    return acc += ele.amount
},0)

const goal = 1000

export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <DonationForm {...donations}/>
            <div className="col-8">
              <Progress total={total} goal={goal} />
              <hr />
              <RecentDonations />
            </div>
          </div>
        </div>
      </>
    );
  }
}
