import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import ProgressBar from "./Components/ProgressBar";

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

const funding = donations.map((donation) => {
  return (
    <RecentDonations
      name={donation.name}
      amount={donation.amount}
      caption={donation.caption}
      />
  )
  })

class App extends React.Component {
  render() {
    return (
      <>
        <TopBar />
        {/* <h5 className='my-4'>Recent Donations</h5> */}
          {funding}
        <div className="container">
          <div className="row">
            {/* TODO: Donations */}

            <div className="col-8">
              <Progress />
              <ProgressBar />
              {/* TODO: Progress */}
              <hr />
              {/* TODO: DonationForm */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

// function App() {
//   const funding = donations.map((donation) => {
//     return (
//       <RecentDonations
//         name={donation.name}
//         amount={donation.amount}
//         caption={donation.caption}
//       />
//     );
//   });
//   return (
//     <div className="App">
//       <TopBar />
//       {funding}
//     </div>
//   );
// }

export default App;
