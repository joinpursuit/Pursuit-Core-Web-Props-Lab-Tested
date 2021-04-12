import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";

import "./App.css";



class App extends React.Component {

    donations = [
      {
        id: 1,
        name: "Jo",
        amount: 50,
        caption: "do you luv me"
      },
      {
        id: 2,
        name: "John",
        amount: 100,
        caption: "Here take a break from work"
      },
      {
        id: 3,
        name: "Michelle",
        amount: 150,
        caption: "lol"
      },
      {
        id: 4,
        name: "Emily",
        amount: 200,
        caption: ""
      },
      {
        id: 5,
        name: "Sam",
        amount: 300,
        caption: "Go to miami"
      },
    ];
    
    total = () => {
      let sum = 0;
      this.donations.forEach((amt)=>{
        sum +=  amt.amount;
      })
      return sum;
    }

  render = () => {
    return (
      <>
        <TopBar />
        <div className="container">

          <div className="row">
              
            <ul class="col-4 list-unstyled recent-donations">
              <h5 class='my-4'>Recent Donations</h5>

              {this.donations.map((donation, i) => {
                
                return (
                  <RecentDonations

                  key={i}
                  id={donation.id} 
                  name={donation.name} 
                  amount={donation.amount} 
                  caption={donation.caption}

                  />
                );

              })}

            </ul>

            <div className="col-8">
              
              <Progress sum={this.total()} percentage={((this.total()/1000)*100)+"%"}/>
              <hr />
              <DonationForm />
            
            </div>
          
          </div>
        
        </div>
      </>
    );
  }
}



export default App;