import React from "react";

const RecentDonations = (props) => {
  const { name, donation, caption } = props;
  return (
    <div>
      <div>
        <li className="media my-2">
          <div className="media-body">
            <h5 className="mt-0 mb-1">
              {name} donated $ {donation}
            </h5>
            {caption}
          </div>
        </li>
      </div>
    </div>
  );
};

export default RecentDonations;
