import React from "react";
// import RecentDonation from "./RecentDonation";

const Progress = ({total, goal}) => {
  // const { total, goal } = props;
  // let goal = 1000;
  // let total = 0;
  // for (let i = 0; i < donations.length; i++) {
  //   total += donations[i].amount;
  //   debugger
  // }
  return (
    <div>
      <h2>
        Raised ${total} of ${goal}
      </h2>
      <progress id="moneyRaised" max="1000" min="0" value="44.10">
        44.10%
      </progress>
    </div>
  );
};

export default Progress;

// const total = donations.reduce((a, b) => a + b.amount, 0)
// {donations.map(donation =>{
//      return <RecentDonation name={donation.name} amount={donation.amount} caption={donation.caption} key={donation.id}/>
//    })}
// debugger
// let goal = 1000;
// // const {amount, total} = props;
// const total = [];
// for (let i = 0; i < donations.length; i++) {
//   total += donations[i].amount;
// }
// console.log(total);
// return (
//   <div>
//     <h1>Raised {total} of {goal}</h1>
//   <progress id="moneyRaised" max="1000" min="0" value="">44.10%</progress>
//   </div>
// )

// };
