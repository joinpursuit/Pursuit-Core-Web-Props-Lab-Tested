

const RecentDonations = (props) => {
  const { donations } = props

  const recentDonations = donations.map((donation, i) => {
    return (
      <li key={i}>
        <h3>{donation.name} donated ${donation.amount}</h3>
        <p>{donation.caption}</p>
      </li>
    )
  })

  return (
    <>
      <h3>Recent Donations</h3>
      {recentDonations}
    </>
  )
};

export default RecentDonations;
