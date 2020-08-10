import React, { Component } from "react";
import Button from "../Button/Button";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div class="container border">
        <div class="row">
          <h4>Results</h4>
          <Button>
            <p>View</p>
          </Button>
          <Button>
            <p>Save</p>
          </Button>
        </div>
        <br />
        <div class="row"></div>
            <div class="container border">
            <div class="row">
                <div class="col-sm-9 text-center">
                    <div class="row">
                        <h5>title</h5>
                    </div>
                    <div class="row">
                        <p>Written by author</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-3">
                        image
                        </div>
                        <div class="col-sm-9">
                        <p>description</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </div>
    );
  }
}

export default Results;
