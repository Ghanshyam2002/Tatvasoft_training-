//this is for task 2:

import react, { Component } from "react";
import Title from "../component/Title";

class Home extends Component {
  // task 3:-making state for the title.js
  constructor() {
    super();
    this.State = {
      title: "Greetings from Tatvasoft",
      Description: "please complete your task",
    };
  }
  render() {
    return (
      <div>
        {/* //task 3:- */}
        <h1>this is home page</h1>
        <h1>{this.State.title}</h1>
        {/* this is for task2:- */}
        {/* <Title />
        <Title name="vivek" />
        <Title name="darshan" /> */}
      </div>
    );
  }
}

export default Home;
