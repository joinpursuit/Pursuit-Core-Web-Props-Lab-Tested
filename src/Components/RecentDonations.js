import React from "react";

const persons = [
  {
    name: "Jo",
    donation: 251,
    caption: "Do you luv me",
  },
  {
    name: "John",
    donation: 30,
    caption: "Here take a break from work",
  },
  {
    name: "Michelle",
    donation: 30,
    caption: "lol",
  },
  {
    name: "Emily",
    donation: 110,
    caption: "",
  },
  {
    name: "Sam",
    donation: 30,
    caption: "Go to Miami",
  }
];
const RecentDonations = () => {
  // const people = persons.map(person =>{
    return (
      <div className="Classes">
        <h3>Recent Donations</h3>
        {persons.map((person) => {
          return;
        })}
      </div>
    );
  };

export default RecentDonations;
