import React from "react";

const DonationForm = () => {

  return (
  <>
    {/* <RecentDonations donations = {donations}/> */}
    <form>
      <label htmlFor="Name">Name</label><br/>
      <input type="text" name="Name" placeholder="John Doe" /><br/>
      <label htmlFor="Caption">Caption</label><br/>
      <input type="text" name="Caption" placeholder="..." /><br/>
      <div>
        <input type="range" min="5" max="1000" class="slider" id="my-range" />
      </div>
      <p id="range-output"></p>
      <input type="submit"></input>
    </form>
  </>
  );
};

export default DonationForm;


// Should include:

// A field for the donor's name to be entered
// A field for the caption
// A range that sets the donation amount
// A "Donate" submit button
// The "Donate" submit button won't do anything -- we haven't taught that yet.