import React from 'react';
import "./Button.css";

function Button({ children }) {
    return (
      <div className="button justify-content-end d-inline">
        <button type="button" class="btn btn-primary btn-container-right">{children}</button>
      </div>
    );
  }

  export default Button;