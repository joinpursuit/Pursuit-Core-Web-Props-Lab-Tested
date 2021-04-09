import React from "react";
import TopBar from "./Components/TopBar";
import Progress from "./Components/Progress";
import Donations from "./Components/Donations";
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
  constructor(props) {
    super(props);
  }
  render() {

    const donation = donations.map((donation) => {
      return (
        <Donations
          name={donation.name}
          amount={donation.amount}
          caption={donation.caption}
          key={donation.id}
        />
      );
    });
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <RecentDonations />

            <div className="col-8">
              <Progress />
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