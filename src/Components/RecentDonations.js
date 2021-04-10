import React from "react";

const RecentDonations = (props) => {
  const { amount, caption, name, id } = props;

  return (
    // <!-- LEFT SIDE / RECENT DONATIONS -->
    <div id="donationContainer">
      <ul className="col-4 list-unstyled recent-donations">
        {/* <!-- INDIVIDUAL DONATION --> */}
        <li key={id} className="media my-2">
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              {name} donated {amount}
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
