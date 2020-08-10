import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">(React) Google Books Search</h1>
          <br />
          <h3>Search for and Save Books of Interest</h3>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
