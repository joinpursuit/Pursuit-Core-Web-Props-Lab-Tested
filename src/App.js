import React from "react";

import TopBar from "./Components/TopBar";
import RecentDonations, {sum} from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";

import "./App.css";



class App extends React.Component {

    

  render = () => {
    return (
      <>
        <TopBar />
        <div className="container">

          <div className="row">
            
            <RecentDonations />

            <div className="col-8">
              
              <Progress 
                total={sum()} 
                percentage={((sum()/1000)*100)+"%"}
                goal={1000}
              />
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