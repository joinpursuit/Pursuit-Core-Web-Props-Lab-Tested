import React from "react";

// class RecentDonations extends React.Component {
//   constructor(props){
//     super(props);
//   };

//   render(){
//     const { name ,amount , caption } = this.props;
//     return (
//       <div>
//         <h6 role = 'heading'>
//           Recent Donations
//         </h6>
//         <div>
//           <h6 role='listitem'>
//             {name} donated ${amount}
//           </h6>
//           <p>
//             {caption}
//           </p>
//         </div>
//       </div>
//     );
//   };
// }

// const listDonations = donations.map(donation => {
//   total += donation.amount;
//   return (
//     <RecentDonations 
//       name={donation.name}
//       amount={donation.amount}
//       caption={donation.caption}
//       key={donation.id}
//     />
//   );
// });


const RecentDonations = (props) => {
  const listDonations = props.donations.map(donation => {
    return (
      <div role='listitem'>
        <p>
          {donation.name} donated ${donation.amount}
        </p>
        <p>{donation.caption}</p>
      </div>
    );
  })
  return (
    <div>
      <h6 role='heading'>
        Recent Donations
      </h6>
      {listDonations}
    </div>
  );
};

export default RecentDonations;
