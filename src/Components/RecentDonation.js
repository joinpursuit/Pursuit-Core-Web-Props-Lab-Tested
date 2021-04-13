import React from "react"

const RecentDonation = (props) => {
    const { name, amount, caption } = props;
    return (
        <li>
          <h5>
            {name} donated ${amount}
          </h5>
          <p>{caption}</p>
        </li>
    )
}



export default RecentDonation