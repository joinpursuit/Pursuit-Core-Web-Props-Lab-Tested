import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
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
const sumDonation = () => {
  let sum = 0;
  donations.map((donation) => {
    let amount = donation.amount;
    sum += amount;
  });

  return sum;
};
export default class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />

        {/* topbar is by itself it is not connected to the container  */}
        <div className="container">
          {/* RECENTDONATIONS SECTION */}

          {/* PROGRESS BAR AND DONATION FORM SECTION */}
          {/* CLASSNAME- ROW IS ALSO ANOTHER CONTAINER FOR RIGHT SIDE  */}
          <div className="row">
            {
              <div className="recent-donations">
                {/* this is where the info (donations)is rendered on screen  */}
                <h2>Recent Donations</h2>
                {donations.map((donation) => {
                  return (
                    <RecentDonations
                      name={donation.name}
                      amount={donation.amount}
                      caption={donation.caption}
                    />
                  );
                })}
              </div>
            }

            <div className="col-8">
              {<Progress goal={1000} total={sumDonation()} />}
              {
                <progress id="file" value="44.10" max="100">
                  44.10%
                </progress>
              }
              <hr />
              {<DonationForm />}
            </div>
          </div>
        </div>
      </>
    );
  }
}
