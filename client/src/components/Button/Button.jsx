import React from 'react';
import "./Button.css";

function Jumbotron({ children }) {
    return (
      <div className="button">
        <button type="button" class="btn btn-primary btn-container-right">{children}</button>
      </div>
    );
  }

  export default Jumbotron;