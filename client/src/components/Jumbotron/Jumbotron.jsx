import React from "react";

function Jumbotron({ children }) {
  return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">(React) Google Books Search</h1>
          <br />
          <h2>Search for and Save Books of Interest</h2>
        </div>
      </div>
  );
}

export default Jumbotron;
