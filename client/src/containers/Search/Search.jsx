import React from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import BookSearch from "../../components/BookSearch/BookSearch"
import Results from "../../components/Results/Results"
import Footer from "../../components/Footer/Footer"

const Search = () => {
    return (
        <div>
            <Jumbotron />
            <BookSearch />
            <Results />
            <Footer />
        </div>
    );
};

export default Search;