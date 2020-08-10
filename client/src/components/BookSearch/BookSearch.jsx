import React, { Component } from 'react';
import Button from "../Button/Button"
import "./Book.css";

class BookSearch extends Component {
    render() {
        return (
            <div className="container border">
                <div className="row">
                    <h3>Book Search</h3>
                </div>
                <br />
                <form>
                    <div class="form-group row">
                        <div class="col-sm-12">
                            <h5>Book</h5>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-12">
                            <input class="form-control" placeholder="Discover!"></input>
                        </div>
                        <Button>
                            <p>Search</p>
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BookSearch;