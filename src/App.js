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

const sumDonations = () => {
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

				<div className="container">
					<div className="row">
						{
							<div className="recent-donations">
								<h5>Recent Donations</h5>
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
							{<Progress goal={1000} total={sumDonations()} />}
							{
								<progress id="progress bar" value="41" max="100">
								
								41%
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
