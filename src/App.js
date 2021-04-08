import React from "react";
import Progress from "./Components/Progress"
import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations"
import DonationForm from "./Components/DonationForm"
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

export default class App extends React.Component {
  render() {
    // const donationList = donations.map((contributor) => {
    //   return <RecentDonations amount={contributor.amount} caption={contributor.caption} name={contributor.name} key={contributor.id} />
    // })
    let total = 0
    donations.forEach(el => {
      total += el.amount
    });
    //  console.log(sum)
    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <div className="recentDonations">
              <RecentDonations donations={donations}/>
            </div>
            <div className="col-8">

              <Progress goal={1000} total={total}/>
              
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