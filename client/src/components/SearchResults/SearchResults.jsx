import React, { Component } from "react";
import Button from "../Button/Button";
import "./SearchResults.css";

class Results extends Component {
  render() {
    return (
      <div class="container border">
        <div class="row">
          <div class="col-sm-2">
          <h4>Results</h4>
          </div>
          <div class="col-sm-8"></div>
          <div class="col-sm-2">
          <Button>
            View
          </Button>
          <Button>
            Save
          </Button>
          </div>
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
