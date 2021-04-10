import React from "react";

const RecentDonations = (props) => {
  const { amount, caption, name } = props;

  return (
    // <!-- LEFT SIDE / RECENT DONATIONS -->
    <div className="donationContainer">
      {/* <h5 className="my-4">Recent Donations</h5> */}
      <ul className="col-4 list-unstyled recent-donations">
        {/* <!-- INDIVIDUAL DONATION --> */}
        <li className="media my-2">
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              {name}{'\u00A0'}
              donated{'\u00A0'}
              {amount}{'\u00A0'} 
            </h5>
            {caption}
          </div>
        </li>
      </ul>
    </div>
  );
  // });
};
export default RecentDonations;
