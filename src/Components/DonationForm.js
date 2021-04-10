import React from "react";

const DonationForm = () => {
	return (
		<form>
			<div>
				<label>Name</label>
				<input type="text" placeholder="John Doe"></input>
			</div>
			<div>
				<label>Caption</label>
				<input type="text" placeholder="..."></input>
			</div>
			<div class="slidecontainer">
				<label>Amount to Donate</label>
				<input
					type="range"
					min="5"
					max="1000"
					value="5"
					class="slider"
					id="myRange"
				></input>
			</div>
			<h3>$5</h3>
			<button>Donate</button>
		</form>
	);
};

export default DonationForm;
