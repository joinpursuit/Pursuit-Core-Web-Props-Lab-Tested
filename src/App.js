import React from "react";

import "./App.css";

const donations = [
  {
    amount: 50,
    caption: "Let's all give to this great cause!",
    id: 1,
    name: "John",
  },
  {
    amount: 50,
    caption: "Let's all give to this great cause!",
    id: 2,
    name: "John",
  },
  {
    amount: 50,
    caption: "Let's all give to this great cause!",
    id: 3,
    name: "John",
  },
];

export default class App extends React.Component {
  render() {
    console.log(donations);
    return "Hello, world!";
  }
}
