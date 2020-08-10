import React from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BookSearch from "../../components/BookSearch/BookSearch"
import Results from "../../components/Results/Results"

const Search = () => {
    return (
        <div>
            <Jumbotron />
            <BookSearch />
            <Results />
        </div>
    );
};

export default Search;