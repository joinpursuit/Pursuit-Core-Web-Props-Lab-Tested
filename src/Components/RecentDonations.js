import React from "react";

export default function RecentDonations({ donations }) {
  return (
    <ul className="col-4 list-unstyled recent-donations">
      <h5 className="my-4">Recent Donations</h5>

      {donations.map((donation) => {
        return (
          <li className="media my-2" key={donation.id}>
            <div className="media-body">
              <h5 className="mt-0 mb-1">
                {donation.name} donated ${donation.amount}
              </h5>
              {donation.caption}
            </div>
          </li>
        );
      })}
    </ul>
  );
}