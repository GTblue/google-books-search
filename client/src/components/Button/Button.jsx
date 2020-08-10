import React, { Component } from 'react';

function Jumbotron({ children }) {
    return (
      <div style={{ textAlign:"right"}} className="button">
        <button type="button" class="btn btn-primary">{children}</button>
      </div>
    );
  }
  
  export default Jumbotron;