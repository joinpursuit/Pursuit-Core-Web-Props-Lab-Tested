import React from "react";

const RecentDonations = (props) => {
  // return null;

  
  const {amount, caption, name} = props;
  return (
    <div> 
      <ul>
        <li>
          <h5>{name} donated $ {amount}</h5>
          <p>{caption}</p>
        </li>
      </ul>
    </div>
    // <ul class="col-4 list-unstyled recent-donations">
    //     <h5 class='my-4'>Recent Donations</h5>

    //     <li class="media my-2">
    //       <div class="media-body">
    //         <h5 class="mt-0 mb-1">Jo donated $50</h5>
    //         do you luv me
    //       </div>
    //     </li>
    //     <li class="media my-2">
    //       <div class="media-body">
    //         <h5 class="mt-0 mb-1">John donated $50</h5>
    //         Here take a break from work
    //       </div>
    //     </li>
    //     <li class="media my-2">
    //       <div class="media-body">
    //         <h5 class="mt-0 mb-1">Michelle donated $50</h5>
    //         lol
    //       </div>
    //     </li>
    //     <li class="media my-2">
    //       <div class="media-body">
    //         <h5 class="mt-0 mb-1">Emily donated $11</h5>
    //       </div>
    //     </li>
    //     <li class="media my-2">
    //       <div class="media-body">
    //         <h5 class="mt-0 mb-1">Sam donated $30</h5>
    //         Go to miami
    //       </div>
    //     </li>
    //   </ul>
  )
};

export default RecentDonations;
