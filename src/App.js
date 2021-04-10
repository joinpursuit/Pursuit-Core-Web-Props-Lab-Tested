import React from "react";
import TopBar from "./Components/TopBar";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
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

class App extends React.Component {
  render() {
    const sum = donations.reduce((amount, donation) => {
      return amount + donation.amount;
    }, 0);
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <RecentDonations donations={donations} />
            <div className="col-8">
              <Progress goal={1000} total={sum} />
              <hr />
              <DonationForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
