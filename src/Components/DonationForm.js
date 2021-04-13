import React from "react";

class DonationForm extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div >
        <form>
          <p>Name</p>
          <input type="text" placeholder='John Doe'/>
          <p>Caption</p>
          <p>
            <input type="text" placeholder='...'/>
          </p>
          <p>
            <input type="range" id="vol" name="vol" min="5" max="1000" />
          </p>
          <p>
            <button type="submit">Donate</button>
          </p>
        </form>
      </div>
    );
  }
}
export default DonationForm;
