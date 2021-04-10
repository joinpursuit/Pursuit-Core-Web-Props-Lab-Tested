import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import ProgressBar from "./Components/ProgressBar";
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

// const totalTest = {
//   total: 0,
//   goal: 1000,
// };

const progressBarNow = {
  bgcolor: "#28a745",
  completed: 0,
};

const sumDonations = (donations) => {
  return donations.reduce((sum, donation) => {
    return sum + donation.amount;
  }, 0);
};

export default class App extends React.Component {
  render() {
    // const donationsRecent = donations.map((donation) => {
    //   return (
    //     <RecentDonations
    //       name={donation.name}
    //       amount={donation.amount}
    //       caption={donation.caption}
    //       key={donation.id}
    //     />
    //   );
    // });

    // const progressNow = () => {
    //   donations.forEach((donation) => {
    //     totalTest.total += donation.amount;
    //   });
    //   return <Progress total={totalTest.total} goal={totalTest.goal}/>;
    // };
    // const newProgress = progressNow();

    const progressBar = () => {
      progressBarNow.completed = (
        (sumDonations(donations) / 1000) *
        100
      ).toFixed(2);
      return (
        <ProgressBar
          bgcolor={progressBarNow.bgcolor}
          completed={progressBarNow.completed}
        />
      );
    };
    const newProgressBar = progressBar();

    return (
      <>
        <TopBar />
        <div className="container">
          <div className="row">
            <ul className="col-4 list-unstyled recent-donations">
              <RecentDonations donations={donations} />
            </ul>
            <div className="col-8">
              <Progress total={sumDonations(donations)} goal={1000} />
              {newProgressBar}

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
